import { createSlice } from "@reduxjs/toolkit";
import { commentList, fieldListThunk } from "./userThunk";

const initialState = {
  fieldList: [],
  comments: [],
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
      });
  },
});

export const {} = userReducer.actions;

export default userReducer.reducer;
