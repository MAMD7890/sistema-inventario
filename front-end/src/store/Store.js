import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import { AuthReducer } from "../reducers/AuthReducers";
import { NominaReducer } from "../reducers/NominaReducer.js";

const reducers = combineReducers({
  auth: AuthReducer,
  nomina: NominaReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
