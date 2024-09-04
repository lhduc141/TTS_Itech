import { createSlice } from "@reduxjs/toolkit";
import {
  aboutUsPost,
  commentList,
  fieldListThunk,
  whyUsPost,
} from "./userThunk";

const initialState = {
  fieldList: [],
  comments: [],
  whyUsPost: [],
  aboutUsPost: [],
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fieldListThunk.fulfilled, (state, action) => {
        state.fieldList = action.payload.data.content;
      })
      .addCase(commentList.fulfilled, (state, action) => {
        state.comments = action.payload.data;
      })
      .addCase(whyUsPost.fulfilled, (state, action) => {
        state.whyUsPost = action.payload.data.data;
      })
      .addCase(aboutUsPost.fulfilled, (state, action) => {
        state.aboutUsPost = action.payload.data.data;
      });
  },
});

export const {} = userReducer.actions;

export default userReducer.reducer;
