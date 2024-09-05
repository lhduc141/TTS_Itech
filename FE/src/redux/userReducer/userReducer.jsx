import { createSlice } from "@reduxjs/toolkit";
import {
  fieldListThunk,
  getAboutUsPost,
  getCarousel,
  getCommentList,
  getWhyUsPost,
} from "./userThunk";

const initialState = {
  fieldList: [],
  comments: [],
  whyUsPost: [],
  aboutUsPost: [],
  carouselImg: [],
  members: [],
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
      .addCase(getCommentList.fulfilled, (state, action) => {
        state.comments = action.payload.data;
      })
      .addCase(getWhyUsPost.fulfilled, (state, action) => {
        state.whyUsPost = action.payload.data.data;
      })
      .addCase(getAboutUsPost.fulfilled, (state, action) => {
        state.aboutUsPost = action.payload.data.data;
      })
      .addCase(getCarousel.fulfilled, (state, action) => {
        state.carouselImg = action.payload.data.content;
      });
  },
});

export const {} = userReducer.actions;

export default userReducer.reducer;
