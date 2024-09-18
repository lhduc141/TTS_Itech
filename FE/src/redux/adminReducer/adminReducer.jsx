import { createSlice } from "@reduxjs/toolkit";
import { getAllPost, getFieldList, loginThunk, updatePost } from "./adminThunk";
import { storage } from "../../services/storage";

const initialState = {
  token: storage.getToken(),
  allPost: [],
  field: [],
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
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        storage.setToken(action.payload.token);
      })
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.allPost = action.payload.data.data;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(getFieldList.fulfilled, (state, action) => {
        state.field = action.payload.data.content;
      });
  },
});

export const { logoutAction } = adminReducer.actions;

export default adminReducer.reducer;
