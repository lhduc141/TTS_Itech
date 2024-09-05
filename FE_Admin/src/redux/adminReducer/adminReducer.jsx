import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const adminReducer = createSlice({
  name: "adminReducer",
  initialState,
  reducers: {
    logoutAction: (state) => {
      state.token = "";
    },
  },
});

export const { logoutAction } = adminReducer.actions;

export default adminReducer.reducer;
