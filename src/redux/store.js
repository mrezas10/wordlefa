import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import WordsReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  words: WordsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger],
});

export const persistor = persistStore(store);
export default store;
