import { applyMiddleware, createStore, compose } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "../redux/reducers/rootReducer";
import { createLogicMiddleware } from "redux-logic";
import rootLogic from "./logics/";
import axios from "axios";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Dependencies for Logic
const deps = {
  httpClient: axios,
};

// Create middleware
const logicMiddleware = createLogicMiddleware(rootLogic, deps);

// Prepare middleware to ensure Redux can use it
const composedMiddleware = compose(applyMiddleware(logicMiddleware));

// Our Redux Store is where application state is held
// Create store with reducers and all our Logic

// export default createStore(rootReducer, composedMiddleware);

// NOTE, for information only:
// If we were just using Redux and not using Redux-Logic we would only need this line:
// export default createStore(rootReducer);

export default () => {
  let store = createStore(persistedReducer, composedMiddleware);
  let persistor = persistStore(store);
  return { store, persistor };
};