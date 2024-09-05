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

export const getWhyUsPost = createAsyncThunk(
  "userReducer/whyUsPost",
  async () => {
    try {
      const data = await userService.getWhyUsPost();

      return data;
    } catch (error) {
      return error;
    }
  }
);
export const getAboutUsPost = createAsyncThunk(
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

export const getCommentList = createAsyncThunk(
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

export const getCarousel = createAsyncThunk(
  "userReducer/carousels",
  async () => {
    try {
      const data = await userService.getCarousel();

      return data;
    } catch (error) {
      return error;
    }
  }
);
