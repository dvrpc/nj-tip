import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";

import getTIP from "./components/reducers/getTIPInfo";
import connectTilesToMap from "./components/reducers/connectTilesToMap";
import StateLoader from "./utils/persist.js";
import getComments from "./components/reducers/commentsReducer";

const stateLoader = new StateLoader();

const rootReducer = combineReducers({ getTIP, connectTilesToMap, getComments });

let store = createStore(
  rootReducer,
  stateLoader.loadState(),
  applyMiddleware(ReduxThunk)
);

store.subscribe(() => stateLoader.saveState(store.getState()));

export default store;
