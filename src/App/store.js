import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../Features/LoaderSlice";
import transitionReducer from "../Features/TransitionHomeSlice";
import ShowPageReducer from "../Features/ShowPageSlice";

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    transition: transitionReducer,
    showPage: ShowPageReducer,
  }
})

export default store;
