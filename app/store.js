import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../app/slices/appSlice";
import {persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, appReducer)

export const store = configureStore({
  reducer: {
    app: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>{ return getDefaultMiddleware({ serializableCheck : false,});
},
});

export const persistor = persistStore(store);