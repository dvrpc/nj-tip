import React, { useState, useEffect, useRef } from "react";
import ReactMapGL, {
  Layer,
  Popup,
  Source,
  NavigationControl
} from "react-map-gl";
import { getBoundingBox } from "geolocation-utils";
import WebMercatorViewport from "@math.gl/web-mercator";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { colors } from "../../utils/tileGeometryColorType";
import { clickTile } from "../../utils/clickTile";
import {
  getTIPByKeywords,
  getTIPByMapBounds,
  setBounds,
  setMapCenter,
  setMapState
} from "../reducers/getTIPInfo";
import LayerControl from "../layer/layerControl";
import LegendControl from "../legend/legendControl";
import layers from "./layers";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";
import mapStyle from "./style.json";

const buildCatFilter = cat => {
  return cat === "All Categories"
    ? ["!=", "TYPE_DESC", ""]
    : ["==", "TYPE_DESC", cat];
};

const buildKeywordFilter = ({ features }) => {
  if (features && features.length) {
    return [
      "in",
      "DBNUM",
      ...features.map(feature => feature.properties.DBNUM)
    ];
  }
  return ["!=", "DBNUM", ""];
};

function MapComponent({
  history,
  category,
  keywordProjects,
  match,
  getTIPByKeywords,
  getTIPByMapBounds,
  markerFromTiles
}) {
  const [details, setDetails] = useState(null);
  let keyFilter = buildKeywordFilter(keywordProjects || { features: [] });
  let catFilter = buildCatFilter(category || "All Categories");
  const [viewport, setViewport] = useState({
    width: "60%",
    height: "100%",
    latitude: 40.018,
    longitude: -75.148,
    zoom: 9
  });
  const [layerList, toggleLayerList] = useState(false);
  const [legendList, toggleLegendList] = useState(false);
  const [dropdownLayers, setDropdownLayers] = useState({
    "Indicators of Potential Disadvantage": false,
    "CMP Corridors": false,
    "Connections 2045 Centers": false,
    "Freight Centers": false,
    "DVRPC Land Use (2015)": false,
    "Urbanized Areas": false
  });
  const mapRef = useRef(null);

  const handleHover = ({ features }) => {
    if (features && features.length) {
      setDetails(features[0]);
    }
  };

  const handleClick = ({ target, features }) => {
    if (
      features.length ||
      target.className.indexOf("mapboxgl-popup-content") > -1
    ) {
      clickTile({
        props: {
          history,
          data: { id: details.properties.DBNUM }
        }
      });
    }
  };

  const handleLoad = () => {
    const map = mapRef.current.getMap();
    map.setFilter("nj-tip-points", ["all", catFilter, keyFilter]);
    map.setFilter("nj-tip-lines", ["all", catFilter, keyFilter]);
  };

  useEffect(() => {
    const Places = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    const { type, value } = match.params;
    if (type === "location") {
      getTIPByKeywords(null);
      Places.getDetails(
        { placeId: value, fields: ["geometry.location"] },
        results => {
          setViewport(prev => ({
            ...prev,
            longitude: results.geometry.location.lng(),
            latitude: results.geometry.location.lat(),
            zoom: 12
          }));
        }
      );
    } else {
      getTIPByKeywords(value);
    }
  }, [match, getTIPByKeywords]);

  useEffect(() => {
    markerFromTiles &&
      setDetails({
        geometry: {
          coordinates: [markerFromTiles.LONGITUDE, markerFromTiles.LATITUDE]
        },
        properties: {
          DBNUM: markerFromTiles.DBNUM,
          TYPE_DESC: markerFromTiles.TYPE_DESC,
          PROJECTNAM: markerFromTiles.PROJECTNAM
        }
      });

    return () => setDetails(null);
  }, [markerFromTiles]);

  if (
    mapRef.current &&
    !isNaN(+mapRef.current.props.width) &&
    keywordProjects &&
    keywordProjects.length
  ) {
    const vw = new WebMercatorViewport({
      width: mapRef.current.props.width,
      height: mapRef.current.props.height
    });
    const locations = keywordProjects.features.map(f => ({
      lon: f.properties.LONGITUDE,
      lat: f.properties.LATITUDE,
      id: f.properties.DBNUM
    }));
    const bounds = getBoundingBox(locations);
    const extent = vw.fitBounds(
      [
        [bounds.topLeft.lon, bounds.topLeft.lat],
        [bounds.bottomRight.lon, bounds.bottomRight.lat]
      ],
      { padding: 50 }
    );

    keyFilter = ["in", "DBNUM", ...locations.map(f => f.id)];
    setViewport(v => ({ ...v, ...extent }));
  }

  if (match.params.type === "location" && mapRef.current) {
    const renderedProjects = {
      allMPMS: [],
      features: []
    };
    let rendered = mapRef.current.queryRenderedFeatures();

    rendered.forEach(item => {
      if (renderedProjects.allMPMS.indexOf(item.properties.DBNUM) === -1) {
        renderedProjects.allMPMS.push(item.properties.DBNUM);
        // add descriptive info for tiles + lat/lng for the tile hover + map popup link
        renderedProjects.features.push({
          DBNUM: item.properties.DBNUM,
          TYPE_DESC: item.properties.TYPE_DESC,
          PROJECTNAM: item.properties.PROJECTNAM,
          LATITUDE:
            item.layer.id === "nj-tip-points"
              ? item.geometry.coordinates[1]
              : item.geometry.coordinates[0][1],
          LONGITUDE:
            item.layer.id === "nj-tip-points"
              ? item.geometry.coordinates[0]
              : item.geometry.coordinates[0][0],
          mapbox_id: `${item.properties.DBNUM}_${item._vectorTileFeature._geometry}`
        });
      }
    });
    getTIPByMapBounds(renderedProjects);
  }

  if (mapRef.current && mapRef.current.getMap().loaded()) {
    const map = mapRef.current.getMap();
    map.setFilter("nj-tip-points", ["all", catFilter, keyFilter]);
    map.setFilter("nj-tip-lines", ["all", catFilter, keyFilter]);

    Object.keys(dropdownLayers).forEach(layer =>
      map.setLayoutProperty(
        layer,
        "visibility",
        dropdownLayers[layer] ? "visible" : "none"
      )
    );
  }

  return (
    <ReactMapGL
      {...viewport}
      ref={mapRef}
      mapStyle={mapStyle}
      mapboxApiAccessToken="pk.eyJ1IjoibW1vbHRhIiwiYSI6ImNqZDBkMDZhYjJ6YzczNHJ4cno5eTcydnMifQ.RJNJ7s7hBfrJITOBZBdcOA"
      onLoad={handleLoad}
      onHover={handleHover}
      onClick={handleClick}
      onViewportChange={viewState => setViewport(viewState)}
      interactiveLayerIds={["nj-tip-points"]}
    >
      {Object.entries(layers).map(([key, value]) => {
        const { source, layout } = value;
        return (
          <Source key={source.id} {...source}>
            <Layer {...layout} />
          </Source>
        );
      })}
      {details && (
        <Popup
          longitude={details.geometry.coordinates[0]}
          latitude={details.geometry.coordinates[1]}
          onClose={() => setDetails(null)}
          onClick={handleClick}
          closeOnClick={false}
          captureClick={false}
        >
          <h2 style={{ pointerEvents: "none" }}>{details.properties.DBNUM}</h2>
          <p
            style={{
              borderBottom: `8px solid #${
                colors[details.properties.TYPE_DESC].forMap
              }`,
              pointerEvents: "none"
            }}
          >
            {details.properties.PROJECTNAM}
          </p>
        </Popup>
      )}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 0,
          padding: 10
        }}
      >
        <NavigationControl />
      </div>
      <nav className="dropdown-nav">
        <LayerControl
          layerList={layerList}
          toggleLayerList={toggleLayerList}
          dropdownLayers={dropdownLayers}
          setDropdownLayers={setDropdownLayers}
        />
        <LegendControl
          legendList={legendList}
          toggleLegendList={toggleLegendList}
        />
      </nav>
    </ReactMapGL>
  );
}

const mapStateToProps = state => {
  return {
    center: state.getTIP.center,
    keywordProjects: state.getTIP.keyword,
    category: state.getTIP.category,
    position: state.getTIP.position,
    markerFromTiles: state.connectTilesToMap.markerInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTIPByKeywords: keywords => dispatch(getTIPByKeywords(keywords)),
    getTIPByMapBounds: features => dispatch(getTIPByMapBounds(features)),
    setMapCenter: latlng => dispatch(setMapCenter(latlng)),
    setMapState: position => dispatch(setMapState(position)),
    setBounds: bounds => dispatch(setBounds(bounds))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MapComponent)
);
