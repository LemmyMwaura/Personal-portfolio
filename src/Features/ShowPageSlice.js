import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show : false,
}

const showPageSlice = createSlice({
  name:'showPage',
  initialState,
  reducers:{
    showPage: (state) => {
      state.show = true
    },
    hidePage: (state) => {
      state.show = false
    }
  }
})

export default showPageSlice.reducer
export const {showPage, hidePage} = showPageSlice.actions 
