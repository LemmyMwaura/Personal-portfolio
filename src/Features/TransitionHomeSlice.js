import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  show: false,
}

const transitionSlice = createSlice({
  name: 'transition',
  initialState,
  reducers: {
    showTransition: (state) => {
      state.show = true
    },
    hideTransition: (state) => {
      state.show = false
    },
  },
})

export default transitionSlice.reducer
export const {showTransition, hideTransition} = transitionSlice.actions
