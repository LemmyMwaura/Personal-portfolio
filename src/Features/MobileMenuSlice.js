import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  show : false
}

const ShowMenuSlice = createSlice({
  name:'mobile-menu',
  initialState,
  reducers: {
    showMobileMenu : (state) => {
      state.show = true
    },
    hideMobileMenu : (state) => {
      state.show = false
    }
  }
})

export default ShowMenuSlice.reducer
export const {showMobileMenu, hideMobileMenu} = ShowMenuSlice.actions
