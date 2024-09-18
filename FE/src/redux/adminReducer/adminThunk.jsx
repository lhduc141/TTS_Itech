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
export const updateCustomerImage = createAsyncThunk(
  "authReducer/updateCustomerImage",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await adminService.updateCustomerImage(payload);

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

export const getAllPost = createAsyncThunk(
  "authReducer/getAllPost",
  async () => {
    try {
      const data = await adminService.getAllPost();

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const updatePost = createAsyncThunk(
  "authReducer/updatePost",
  async (payload) => {
    try {
      const data = await adminService.updatePost(payload);

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const updateMember = createAsyncThunk(
  "authReducer/updateMember",
  async (payload) => {
    try {
      const data = await adminService.updateMember(payload);
      console.log(data);

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const getFieldList = createAsyncThunk(
  "authReducer/getFieldList",
  async () => {
    try {
      const data = await adminService.getFieldList();

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const updateFieldPost = createAsyncThunk(
  "authReducer/updateFieldPost",
  async (payload) => {
    try {
      const data = await adminService.updateFieldPost(payload);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
