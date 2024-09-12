import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "reduxjs-toolkit-persist"
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1"
import storage from "reduxjs-toolkit-persist/lib/storage"
import userSlice from "./slices/userSlice"

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel1,
}

const reducers = combineReducers({
  user: userSlice,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistedStore = persistStore(store)
