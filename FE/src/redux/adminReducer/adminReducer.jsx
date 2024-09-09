import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./adminThunk";
import { storage } from "../../services/storage";

const initialState = {
  token: storage.getToken(),
};

const adminReducer = createSlice({
  name: "adminReducer",
  initialState,
  reducers: {
    logoutAction: (state) => {
      state.token = null;
      storage.deleteToken();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.token = action.payload.token;
      storage.setToken(action.payload.token);
    });
  },
});

export const { logoutAction } = adminReducer.actions;

export default adminReducer.reducer;
