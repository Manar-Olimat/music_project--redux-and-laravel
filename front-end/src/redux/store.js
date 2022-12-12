/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import { shazamCoreApi } from "./services/shazamCore";
import playerReducer from "./features/playerSlice";
import reviewReducer from "./fromDB/reviewSlice";
import userReducer from "./fromDB/userSlice";
import postReducer from "./fromDB/userSlice";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
    Reviews: reviewReducer,
    Users: userReducer,
    Posts: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
