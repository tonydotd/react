import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showCart: false, showNotificaiton: false, firstLoad: true },
  reducers: {
    setFirstLoad(state, action) {
      state.firstLoad = action.payload;
    },
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
