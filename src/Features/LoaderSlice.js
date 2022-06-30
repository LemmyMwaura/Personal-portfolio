import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  show: true,
}

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader: (state) => {
      state.show = true
    },
    hideLoader: (state) => {
      state.show = false
    },
  },
})

export default loaderSlice.reducer
export const {showLoader, hideLoader} = loaderSlice.actions
