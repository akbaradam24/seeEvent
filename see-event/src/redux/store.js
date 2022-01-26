import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import userReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

if (module.hot) {
  module.hot.accept("./reducers", () => {
    // This fetch the new state of the above reducers.
    const nextRootReducer = require("./reducers").default;
    store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
  });
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };
