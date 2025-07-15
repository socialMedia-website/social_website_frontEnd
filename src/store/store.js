import { authApi } from "../services/authApi";
import { storyApi } from "../services/storyApi";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { baseApi } from "../services/baseApi";
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [storyApi.reducerPath]: storyApi.reducer,
    auth: authSlice,
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(storyApi.middleware),
});
