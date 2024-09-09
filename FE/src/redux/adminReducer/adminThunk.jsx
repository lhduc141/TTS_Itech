import { createAsyncThunk } from "@reduxjs/toolkit";
// import { adminService } from "../../services/adminService";
import { authService } from "../../services/authService";
import { adminService } from "../../services/adminService";

export const loginThunk = createAsyncThunk(
  "authReducer/loginThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await authService.loginAccount(payload);

      return data.data.content;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        code: error.code,
        response: error.response ? error.response.data : null, // Include any response data if available
      });
    }
  }
);

export const updateInfor = createAsyncThunk(
  "authReducer/updateInfor",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await adminService.changeCompanyInfor(payload);

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

export const updateCarouselImage = createAsyncThunk(
  "authReducer/updateCarouselImage",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await adminService.updateCarouselImage(payload);

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

export const updateFeedback = createAsyncThunk(
  "authReducer/updateFeedback",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await adminService.updateFeedback(payload);

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
