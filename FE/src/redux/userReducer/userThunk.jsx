import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../../services/userService";

export const fieldListThunk = createAsyncThunk(
  "userReducer/fieldListThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userService.getFieldList();

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        code: error.code,
        response: error.response ? error.response.data : null, // Include any response data if available
      });
    }
  }
);

export const fieldPostThunk = createAsyncThunk(
  "userReducer/fieldPostThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userService.getFieldPost(payload);

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        code: error.code,
        response: error.response ? error.response.data : null, // Include any response data if available
      });
    }
  }
);

export const whyUsPost = createAsyncThunk("userReducer/whyUsPost", async () => {
  try {
    const data = await userService.getWhyUsPost();

    return data;
  } catch (error) {
    return error;
  }
});
export const aboutUsPost = createAsyncThunk(
  "userReducer/aboutUsPost",
  async () => {
    try {
      const data = await userService.getAboutUs();

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const commentList = createAsyncThunk(
  "userReducer/comemnts",
  async () => {
    try {
      const data = await userService.getComment();

      return data.data;
    } catch (error) {
      return error;
    }
  }
);
