import { createSlice } from "@reduxjs/toolkit";
import {
  fieldListThunk,
  getAboutUsPost,
  getCarousel,
  getCommentList,
  getCustomers,
  getFieldPostDetail,
  getInformation,
  getTeamMembers,
  getWhyUsPost,
} from "./userThunk";
import { updateInfor } from "../adminReducer/adminThunk";

const initialState = {
  fieldList: [],
  comments: [],
  whyUsPost: [],
  aboutUsPost: [],
  carouselImg: [],
  members: [],
  customer: [],
  postDetail: {},
  information: {},
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
      })
      .addCase(getTeamMembers.fulfilled, (state, action) => {
        state.members = action.payload.data.data;
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.customer = action.payload.data.content;
      })
      .addCase(getFieldPostDetail.fulfilled, (state, action) => {
        state.postDetail = action.payload.data.content;
      })
      .addCase(getInformation.fulfilled, (state, action) => {
        state.information = action.payload.data.data;
      })
      .addCase(updateInfor.fulfilled, (state, action) => {
        state.information = action.payload.data.content;
      });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = userReducer.actions;

export default userReducer.reducer;
