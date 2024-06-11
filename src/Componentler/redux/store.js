import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./slice/filmSlice";
import { filmApi } from "./api/filmApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    films: filmSlice,
    [filmApi.reducerPath]: filmApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmApi.middleware),
});
setupListeners(store.dispatch);
