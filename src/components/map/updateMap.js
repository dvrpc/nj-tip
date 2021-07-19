import mapboxgl from "mapbox-gl";
import { colors } from "../../utils/tileGeometryColorType.js";

export const updateBounds = (mapReference) => {
  let rendered = mapReference.map.queryRenderedFeatures({
    layers: ["nj-tip-points", "nj-tip-lines"],
  });

  // exit & clear store when no projects are rendered
  if (!rendered.length) {
    mapReference.props.getTIPByMapBounds(null);
    return;
  }

  let renderedProjects = {
    allMPMS: [],
    features: [],
  };

  rendered.forEach((item) => {
    if (renderedProjects.allMPMS.indexOf(item.properties.dbnum) === -1) {
      const props = item.properties;
      // extract features from rendered projects
      renderedProjects.allMPMS.push(props.dbnum);
      renderedProjects.features.push({
        dbnum: props.dbnum,
        type_desc: props.type_desc,
        projectnam: props.projectnam,
        CTY: props.CTY,
        lat:
          item.layer.id === "nj-tip-points"
            ? item.geometry.coordinates[1]
            : item.geometry.coordinates[0][1],
        long_:
          item.layer.id === "nj-tip-points"
            ? item.geometry.coordinates[0]
            : item.geometry.coordinates[1][0],
        mapbox_id: `${props.dbnum}_${item._vectorTileFeature._geometry}`,
      });
    }
  });
  mapReference.props.getTIPByMapBounds(renderedProjects);
};

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
    right: [-15, -5],
  },
});

export const showPopup = (marker, e, map) => {
  let details = marker.properties || marker;

  // handle edge case where line features pass geometry
  if (Array.isArray(details.long_) || Array.isArray(details.lat)) {
    details.long_ = details.long_[0];
    details.lat = details.lat[1];
  }

  const lng = e?.lngLat?.lng ?? details.long_;
  const lat = e?.lngLat?.lat ?? details.lat;

  tilePopup
    .setLngLat([lng, lat])
    .setHTML(
      `<h2>${details.dbnum}</h2><p style="border-bottom: 8px solid #${
        colors[details.type_desc].forMap
      };">${details.projectnam}</p>`
    )
    .addTo(map);

  return tilePopup;
};
