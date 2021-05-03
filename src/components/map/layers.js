const IPD = {
  source: {
    id: "IPD",
    type: "geojson",
    data:
      "https://arcgis.dvrpc.org/portal/rest/services/Demographics/IPD_2018/FeatureServer/0/query?where=STATE_FIPS%3D%2734%27&returnGeometry=true&outFields=IPD_Score&geometryPrecision=4&outSR=4326&f=geojson",
  },
  layout: {
    id: "Indicators of Potential Disadvantage",
    type: "fill",
    source: "IPD",
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "ipd_score"],
        9,
        "#ffffd9",
        13,
        "#edf8b1",
        15,
        "#c7e9b4",
        17,
        "#7fcdbb",
        19,
        "#41b6c4",
        21,
        "#1d91c0",
        24,
        "#225ea8",
        27,
        "#253494",
        30,
        "#081d58",
      ],
      "fill-opacity": 0.5,
    },
  },
};
const CMP = {
  source: {
    id: "CMP",
    type: "geojson",
    data:
      "https://arcgis.dvrpc.org/portal/rest/services/Transportation/CMP2019_CorridorSubCorridorAreas/FeatureServer/0/query?where=state%3D'NJ'&returnGeometry=true&outFields=WEB_COLOR&geometryPrecision=4&outSR=4326&f=geojson",
  },
  layout: {
    id: "CMP Corridors",
    type: "fill",
    source: "CMP",
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-color": ["get", "web_color"],
      "fill-opacity": 0.8,
    },
  },
};
const Connections = {
  source: {
    id: "Connections",
    type: "geojson",
    data:
      "https://arcgis.dvrpc.org/portal/rest/services/Planning/LRP_2045_PlanningCenters/FeatureServer/0/query?where=State='NJ'&outFields=lup_type&geometryPrecision=4&outSR=4326&f=geojson",
  },
  layout: {
    id: "Connections 2045 Centers",
    type: "fill",
    source: "Connections",
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-color": [
        "case",
        ["==", ["get", "lup_type"], "Metropolitan Center"],
        "#f26522",
        ["==", ["get", "lup_type"], "Metropolitan Subcenter"],
        "#223860",
        ["==", ["get", "lup_type"], "Suburban Center"],
        "#0b6d32",
        ["==", ["get", "lup_type"], "Town Center"],
        "#729faa",
        ["==", ["get", "lup_type"], "Rural Center"],
        "#ed1c24",
        ["==", ["get", "lup_type"], "Planned Town Center"],
        "#9d1d20",
        "#cccccc",
      ],
      "fill-opacity": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        7,
        0.75,
        9,
        0.5,
        11,
        0.25,
      ],
    },
  },
};
const Freight = {
  source: {
    id: "Freight",
    type: "geojson",
    data:
      "https://arcgis.dvrpc.org/portal/rest/services/Planning/LRP_2045_Freight_Centers/FeatureServer/0/query?where=1%3D1&outFields=types&outSR=4326&f=geojson",
  },
  layout: {
    id: "Freight Centers",
    type: "fill",
    source: "Freight",
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-color": [
        "case",
        ["==", ["get", "types"], "International Gateway"],
        "#f4bd48",
        ["==", ["get", "types"], "Heavy Industrial"],
        "#ef7e51",
        ["==", ["get", "types"], "Distribution and Logistics"],
        "#ca4b66",
        ["==", ["get", "types"], "High Tech Manufacturing"],
        "#883272",
        ["==", ["get", "types"], "Local Manufacturing and Distribution"],
        "#312867",
        "#cccccc",
      ],
      "fill-opacity": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        7,
        0.75,
        9,
        0.5,
        11,
        0.25,
      ],
    },
  },
};
const LandUse = {
  source: {
    id: "LandUse",
    type: "vector",
    url: "https://tiles.dvrpc.org/data/dvrpc-landuse-2015.json",
  },
  layout: {
    id: "DVRPC Land Use (2015)",
    type: "fill",
    source: "LandUse",
    layout: {
      visibility: "none",
    },
    "source-layer": "lu2015",
    paint: {
      "fill-color": [
        "step",
        ["to-number", ["get", "lu15sub"]],
        "rgb(255, 255, 0)",
        3000,
        "rgb(194,158,215)",
        4000,
        "rgb(104,104,104)",
        5000,
        "rgb(255,190,190)",
        6000,
        "rgb(255,0,0)",
        7000,
        "rgb(190,232,255)",
        8000,
        "rgb(0,132,168)",
        9000,
        "rgb(230,230,0)",
        10000,
        "rgb(215,215,158)",
        11000,
        "rgb(168,0,0)",
        12000,
        "rgb(76,230,0)",
        13000,
        "rgb(0,197,255)",
        14000,
        "rgb(165,245,122)",
      ],
      "fill-opacity": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        1,
        7,
        0.75,
        9,
        0.5,
        11,
        0.25,
      ],
    },
  },
};
const UrbanizedAreas = {
  source: {
    id: "UrbanizedAreas",
    type: "geojson",
    data:
      "https://arcgis.dvrpc.org/portal/rest/services/Boundaries/UrbanAreas_NJ/FeatureServer/0/query?where=LSAD_TYPE%3D'Urbanized+Area'&sqlFormat=standard&geometryPrecision=4&outSR=4326&outFields=census_ua_&f=geojson",
  },
  layout: {
    id: "Urbanized Areas",
    type: "fill",
    source: "UrbanizedAreas",
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-color": [
        "case",
        ["==", ["get", "census_ua_"], "03898"],
        "#e60000",
        ["==", ["get", "census_ua_"], "90658"],
        "#c560f7",
        ["==", ["get", "census_ua_"], "25849"],
        "#365487",
        ["==", ["get", "census_ua_"], "01495"],
        "#00DBDB",
        ["==", ["get", "census_ua_"], "90730"],
        "#73004C",
        ["==", ["get", "census_ua_"], "71803"],
        "#FFD37F",
        ["==", ["get", "census_ua_"], "88462"],
        "#00734C",
        ["==", ["get", "census_ua_"], "89263"],
        "#55FF00",
        ["==", ["get", "census_ua_"], "63217"],
        "#737300",
        ["==", ["get", "census_ua_"], "69076"],
        "#E67553",
        "#b4b4b4",
      ],
      "fill-opacity": 0.25,
    },
  },
};

export default { IPD, CMP, Connections, Freight, LandUse, UrbanizedAreas };
