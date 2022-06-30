import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../Features/LoaderSlice";

const store = configureStore({
  reducer: {
    loader: loaderReducer
  }
})

export default store;