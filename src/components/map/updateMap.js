import mapboxgl from "mapbox-gl";
import { colors } from "../../utils/tileGeometryColorType.js";

export const updateBounds = mapReference => {
  let rendered = mapReference.map.queryRenderedFeatures({
    layers: ["nj-tip-points", "nj-tip-lines"]
  });

  // exit & clear store when no projects are rendered
  if (!rendered.length) {
    mapReference.props.getTIPByMapBounds(null);
    return;
  }

  let renderedProjects = {
    allMPMS: [],
    features: []
  };

  rendered.forEach(item => {
    if (renderedProjects.allMPMS.indexOf(item.properties.DBNUM) === -1) {
      const props = item.properties;
      // extract features from rendered projects
      renderedProjects.allMPMS.push(props.DBNUM);
      renderedProjects.features.push({
        DBNUM: props.DBNUM,
        TYPE_DESC: props.TYPE_DESC,
        PROJECTNAM: props.PROJECTNAM,
        CTY: props.CTY,
        LATITUDE:
          item.layer.id === "nj-tip-points"
            ? item.geometry.coordinates[1]
            : item.geometry.coordinates[0][1],
        LONGITUDE:
          item.layer.id === "nj-tip-points"
            ? item.geometry.coordinates[0]
            : item.geometry.coordinates[1][0],
        mapbox_id: `${props.DBNUM}_${item._vectorTileFeature._geometry}`
      });
    }
  });
  mapReference.props.getTIPByMapBounds(renderedProjects);
};

export const showPopup = (marker, map) => {
  let details = marker.properties || marker;

  let tilePopup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
    offset: {
      top: [0, 0],
      "top-left": [0, 0],
      "top-right": [0, 0],
      bottom: [0, -15],
      "bottom-left": [0, -15],
      "bottom-right": [0, -15],
      left: [15, -5],
      right: [-15, -5]
    }
  });

  // handle edge case where line features pass geometry
  if (Array.isArray(details.LONGITUDE) || Array.isArray(details.LATITUDE)) {
    details.LONGITUDE = details.LONGITUDE[0];
    details.LATITUDE = details.LATITUDE[1];
  }

  tilePopup
    .setLngLat([details.LONGITUDE, details.LATITUDE])
    .setHTML(
      `<h2>${details.DBNUM}</h2><p style="border-bottom: 8px solid #${
        colors[details.TYPE_DESC].forMap
      };">${details.PROJECTNAM}</p>`
    )
    .addTo(map);

  return tilePopup;
};
