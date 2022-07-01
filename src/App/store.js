import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../Features/LoaderSlice";
import transitionReducer from "../Features/TransitionHomeSlice";
import ShowPageReducer from "../Features/ShowPageSlice";
import ShowMobileMenuReducer from "../Features/MobileMenuSlice";

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    transition: transitionReducer,
    showPage: ShowPageReducer,
    showMobileMenu : ShowMobileMenuReducer
  }
})

export default store;
