# NJ TIP 2020
The DVRPC Draft TIP for NJ represents the region's federally funded transportation improvement priorities and is required by federal law in order for the region to receive and spend federal transportation funds. It has been developed in cooperation with NJDOT, NJ TRANSIT, DRPA/PATCO and DVRPC's member counties and cities. After consideration of public comments, the Draft TIP with any recommended changes will be presented to the DVRPC Board for adoption at the regularly scheduled Board meeting on September 26, 2019.

## What is the NJ TIP web viewer?
The NJ TIP web app hosts information about the Draft NJ TIP as well as an interactive map containing every NJ TIP project. Users can search by keyword, project name or location to find the projects they are interested in. From the map view, users can pan and zoom to reveal more projects and can filter projects by type. Projects are displayed as icons on the map as well as either list items or tiles with satellite imagery on the sidebar. Clicking on a project either in the map or on the sidebar will bring users to a detailed view that has all of the project information including funding and milestones tables. Users can print all of the detailed information by clicking the 'print' button.

## How was it made?
The app is built on Inferno, a React-like library. The web mapping component is built on top of Mapbox GL JS. The projects and several of the map overlay layers are custom made vector tiles hosted by Digital Ocean. The other map overlay layers are geoJSON's loaded in from DVRPC's ArcGIS online portal.

## Getting started
- `cd` to project directory
- `git clone https://github.com/dvrpc/nj-tip.git`
- `npm install`
- `npm start`

## Build
Make sure your current working tree is clean and up to date with the latest, stable version of the TIP.
- (optional) delete the 'static' folder from /TIP/NJ/ to make sure old, unused bundles with different names are removed
- `npm run build`
- copy files from the 'build' folder to the /TIP/NJ/ folder on staging
