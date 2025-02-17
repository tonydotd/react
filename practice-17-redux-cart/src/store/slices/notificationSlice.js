import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: null, name: null, message: null };

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      const { status, name, message } = action.payload;
      state.status = status;
      state.name = name;
      state.message = message;
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;
