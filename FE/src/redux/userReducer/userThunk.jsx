import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";

export const userThunk = createAsyncThunk(
  "userReducer/loginThunk",
  async (payload) => {}
);
