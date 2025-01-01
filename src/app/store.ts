import { userReducer } from "@/entities/user";
import { baseApi } from "@/shared/api";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootRecucer = combineReducers({
  user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const store = configureStore({
  reducer: rootRecucer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
