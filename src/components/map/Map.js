import React, { Component } from "react";
import mapboxgl from "!mapbox-gl";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  getTIPByKeywords,
  getTIPByMapBounds,
  setProjectScope,
} from "../../redux/reducers/getTIPInfo";

import { updateBounds, showPopup } from "./updateMap";
import { clickTile } from "../../utils/clickTile.js";

import "./Map.css";
import layers from "./layers.js";
import mapStyle from "./style.json";
import Legend from "../legend/legend.js";

class MapComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownLayers: {
        "Indicators of Potential Disadvantage": false,
        "Racial Minority": false,
        "Low Income": false,
        "CMP Corridors": false,
        "Connections 2045 Centers": false,
        "Freight Centers": false,
        "DVRPC Land Use (2015)": false,
        "Urbanized Areas": false,
      },
      toggleLayerList: false,
      toggleLegendList: false,
      keyFilter: ["!=", "dbnum", ""],
      catFilter: ["!=", "type_desc", ""],
      tilePopup: {},
      zoom: window.innerWidth <= 950 ? 7.3 : 8.5,
    };

    this.Places = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    this.loaderTimeout = true;
  }

  updateLayerVisibility = (selectedLayer) => {
    let { dropdownLayers } = this.state;

    const srcLookup = {
      "Indicators of Potential Disadvantage": "IPD",
      "Racial Minority": "RacialMinority",
      "Low Income": "LowIncome",
      "CMP Corridors": "CMP",
      "Connections 2045 Centers": "Connections",
      "Freight Centers": "Freight",
      "DVRPC Land Use (2015)": "LandUse",
      "Urbanized Areas": "UrbanizedAreas",
    };

    const selectedSrc = srcLookup[selectedLayer];
    const hasSrc = this.map.getSource(selectedSrc);

    // if the layer doesn't exist yet, add it
    if (!hasSrc) {
      const { id, ...srcInfo } = layers[selectedSrc].source;
      this.map.addSource(id, srcInfo);

      this.map.addLayer(layers[selectedSrc].layout, "water shadow");
    }

    //toggle selected layer state
    Object.keys(dropdownLayers).forEach((layer) => {
      let layerCheck = this.map.getLayer(layer);

      // move on to the next one if the layer hasn't been added yet
      if (!layerCheck) return;

      // set other layer states to false
      if (layer !== selectedLayer) {
        dropdownLayers[layer] = false;

        // if a layer does exist, check it's visibility and set it to none if it was previously on
        if (layerCheck) {
          let isVisible = this.map.getLayoutProperty(layer, "visibility");
          if (isVisible)
            this.map.setLayoutProperty(layer, "visibility", "none");
        }

        // turn currently active layer on or off depending on its current state
      } else {
        dropdownLayers[layer] = !dropdownLayers[layer];
        this.map.setLayoutProperty(
          layer,
          "visibility",
          dropdownLayers[layer] ? "visible" : "none"
        );
      }
    });

    this.setState({ dropdownLayers });
  };

  toggleDropdown = (e) => {
    e.preventDefault();
    e.target.id === "layerMenuButton"
      ? this.setState({ toggleLayerList: !this.state.toggleLayerList })
      : this.setState({ toggleLegendList: !this.state.toggleLegendList });
  };

  buildCategoryFilter = (cat) => {
    switch (cat) {
      case "All Categories":
        this.setState({ catFilter: ["!=", "type_desc", ""] });
        break;
      default:
        this.setState({ catFilter: ["==", "type_desc", cat || ""] });
    }
  };

  buildKeywordFilter = (projects) => ["in", "dbnum"].concat(projects);

  resetControl = () =>
    this.map
      ? this.map.flyTo({
          center: [-74.909, 39.969],
          zoom: 8,
        })
      : false;

  componentDidMount() {
    let popup;
    const { type, value } = this.props.match.params;

    // @ panMap function START
    switch (type) {
      case "location":
        this.Places.getDetails(
          { placeId: value, fields: ["geometry.location"] },
          (results) => {
            const lng = results.geometry.location.lng();
            const lat = results.geometry.location.lat();
            this.map.flyTo({
              center: [lng, lat],
              zoom: 12,
            });
          }
        );
        break;
      case "keyword":
        this.props.getTIPByKeywords(value);
        break;
      default:
        const projectScope = {
          coords: null,
          id: value.toUpperCase(),
          zoom: 18,
        };

        this.props.setProjectScope(projectScope);
    }
    // @panMap function END

    mapboxgl.accessToken =
      "pk.eyJ1IjoibW1vbHRhIiwiYSI6ImNqZDBkMDZhYjJ6YzczNHJ4cno5eTcydnMifQ.RJNJ7s7hBfrJITOBZBdcOA";

    this.map = new mapboxgl.Map({
      container: this.tipMap,
      style: mapStyle,
      center: [-74.909, 39.969],
      zoom: this.state.zoom,
      dragRotate: false,
    });

    this.map.on("load", () => {
      let zoom = new mapboxgl.NavigationControl();
      this.map.addControl(zoom, "top-right");
    });

    const clickHandler = (e) => {
      if (!e) return;

      // get a handle on history
      const { history } = this.props;

      // extract and format values to match those from listItem/tiles
      const geom = e.lngLat;
      const dbnum = e.features[0].properties.dbnum;

      const data = {
        long_: geom.lng,
        lat: geom.lat,
        dbnum,
      };
      const project = {
        history,
        data,
      };

      clickTile(project, this.props.setProjectScope);
    };

    this.map.on("click", "nj-tip-points", clickHandler);
    this.map.on("click", "nj-tip-lines", clickHandler);

    const enterHandler = (e) => {
      this.map.getCanvas().style.cursor = "pointer";

      const coordinates = e.features[0].geometry.coordinates.slice();
      const long_ = coordinates[0];
      const lat = coordinates[1];

      const marker = { ...e.features[0].properties, long_, lat };
      popup = showPopup(marker, e, this.map);
    };

    // show popup when a user hovers over a marker.
    this.map.on("mouseenter", "nj-tip-points", enterHandler);
    this.map.on("mouseenter", "nj-tip-lines", enterHandler);

    const leaveHandler = () => {
      this.map.getCanvas().style.cursor = "";
      popup.remove();
    };
    // remove popup when the user leaves
    this.map.on("mouseleave", "nj-tip-points", leaveHandler);
    this.map.on("mouseleave", "nj-tip-lines", leaveHandler);

    // handle user events to update map results
    this.map.on("zoomend", () => updateBounds(this));
    this.map.on("moveend", () => updateBounds(this));

    // this handles the edge case of setting a filter without map movement, but only sometimes.
    this.map.on("data", () => {
      if (this.map.isStyleLoaded()) updateBounds(this);
    });

    // after map is done initializing, build a filter
    if (this.props.category) this.buildCategoryFilter(this.props.category);
  }

  componentDidUpdate(prevProps) {
    const { type, value } = this.props.match.params;
    let oldType = prevProps.match.params.type || null;
    let oldValue = prevProps.match.params.value || null;
    let oldScope = prevProps.projectScope ? prevProps.projectScope.id : null;
    const oldKeywords = prevProps.keywordProjects
      ? prevProps.keywordProjects.length
      : null;

    // popups
    const newTileHover = this.props.markerFromTiles;
    const hasPopup = Object.keys(this.state.tilePopup).length;

    if (newTileHover) {
      // check if old = current
      const oldTileHover = prevProps.markerFromTiles;
      if (oldTileHover && oldTileHover.dbnum === newTileHover.dbnum) return;

      // remove the old popup
      if (hasPopup) this.state.tilePopup.remove();

      const marker = this.props.markerFromTiles;
      const tilePopup = showPopup(marker, null, this.map);

      // set the new popup
      this.setState({ tilePopup });
    } else if (hasPopup) this.state.tilePopup.remove();

    // categories
    if (this.props.category !== prevProps.category)
      this.buildCategoryFilter(this.props.category);

    // set keywords filter
    if (
      this.props.keywordProjects &&
      this.props.keywordProjects.length !== oldKeywords
    ) {
      // set new keyFilter or default. this is gross but it works @UPDATE: improve
      let keyFilter =
        this.props.keywordProjects[0] === "!="
          ? this.props.keywordProjects
          : this.buildKeywordFilter(this.props.keywordProjects);
      this.setState({ keyFilter });
    }

    // project view
    if (type !== oldType || value !== oldValue) {
      // @panMap function START
      switch (type) {
        case "location":
          this.Places.getDetails(
            { placeId: value, fields: ["geometry.location"] },
            (results) => {
              const lng = results.geometry.location.lng();
              const lat = results.geometry.location.lat();
              this.map.flyTo({
                center: [lng, lat],
                zoom: 12,
              });
            }
          );
          break;
        case "keyword":
          // @panMap NOTE: on didUpdate, this can flyTo because this.map exists. on didMount, it can't. Handle this in the function with a bool
          // get mpms array to filter & then fly to default extent
          this.props.getTIPByKeywords(value);
          this.map.flyTo({
            center: [-74.909, 39.969],
            zoom: this.state.zoom,
          });
          break;
        default:
          const projectScope = {
            coords: null,
            id: value,
            zoom: 18,
          };

          this.props.setProjectScope(projectScope);
      }
      // @panMap function END
    }

    if (this.props.projectScope && this.props.projectScope.id !== oldScope) {
      const scope = this.props.projectScope;
      //const id = parseInt(scope.id);
      //let groupProject = groupProjects.includes(id);
      console.log(scope);
      // zoom to project or full extent for group projects
      // if (!groupProject) {
      this.map.flyTo({
        center: scope.coords,
        zoom: 18,
      });
      // } else {
      // this.map.flyTo({
      //   center: [-75.4, 40.15],
      //   zoom: this.state.zoom,
      // });
      //}
    }

    // toggle active project style
    if (this.props.activeProject !== prevProps.activeProject) {
      const id = this.props.activeProject;
      let intervalId;

      const styleProject = (id) => {
        if (id) {
          this.map.setFeatureState(
            {
              source: "nj-tip_points",
              id,
            },
            {
              active: true,
            }
          );
        } else {
          this.map.removeFeatureState({
            source: "nj-tip_points",
          });
        }
      };

      const checkStyle = () => {
        if (this.map.isStyleLoaded()) {
          styleProject(id);
          clearInterval(intervalId);
        }
      };

      if (this.map.isStyleLoaded()) {
        styleProject(id);
      } else {
        intervalId = window.setInterval(checkStyle, 400);
      }
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    // @UPDATE: move this to didUpdate so that it doesn't run for project views
    // @NOTE: this trigers for every listItem/tile hover so this *really* needs to be fixed
    if (this.map) {
      let lines = this.map.getLayer("nj-tip-lines");
      let points = this.map.getLayer("nj-tip-points");

      if (points && lines) {
        ["nj-tip-points", "nj-tip-lines"].forEach((layer) => {
          this.map.setFilter(layer, [
            "all",
            this.state.catFilter,
            this.state.keyFilter,
          ]);
        });
      }
    }

    return (
      <div className="map no-print" ref={(e) => (this.tipMap = e)}>
        <nav className="dropdown-nav">
          <div className="dropdown-layers">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="layerMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={this.state.toggleLayerList}
              onClick={this.toggleDropdown}
            >
              Layers
            </button>
            <div
              className={
                "layer-menu " + (this.state.toggleLayerList ? "show" : "")
              }
            >
              {Object.keys(this.state.dropdownLayers).map((layer) => {
                return (
                  <p
                    key={layer}
                    className={
                      "dropdown-item " +
                      (this.state.dropdownLayers[layer].show ? "selected" : "")
                    }
                    onClick={() => this.updateLayerVisibility(layer)}
                  >
                    {layer}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="dropdown-legend">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="legendMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={this.state.toggleLegendList}
              onClick={this.toggleDropdown}
            >
              Legend
            </button>
            {this.state.toggleLegendList ? <Legend show={"show"} /> : null}
          </div>
        </nav>
        <div
          id="default-extent-btn"
          className="shadow overlays"
          aria-label="Default DVRPC Extent"
          onClick={this.resetControl}
        >
          <img
            id="default-extent-img"
            src="https://www.dvrpc.org/img/banner/new/bug-favicon.png"
            alt="DVRPC logo"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    keywordProjects: state.getTIP.keyword,
    category: state.getTIP.category,
    markerFromTiles: state.connectTilesToMap.markerInfo,
    projectScope: state.getTIP.projectScope,
    activeProject: state.getTIP.activeProject,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTIPByKeywords: (keywords) => dispatch(getTIPByKeywords(keywords)),
    getTIPByMapBounds: (features) => dispatch(getTIPByMapBounds(features)),
    setProjectScope: (projectScope) => dispatch(setProjectScope(projectScope)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MapComponent)
);
