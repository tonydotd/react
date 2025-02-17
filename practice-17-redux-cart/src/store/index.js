import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import cartReducer from "./slices/cartSlice";
import notificationReducer from "./slices/notificationSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    notification: notificationReducer,
  },
});

export default store;
