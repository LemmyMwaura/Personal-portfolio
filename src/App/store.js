import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../Features/LoaderSlice";
import transitionReducer from "../Features/TransitionHomeSlice";

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    transition: transitionReducer,
  }
})

export default store;