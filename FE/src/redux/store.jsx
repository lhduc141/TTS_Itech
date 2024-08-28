import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer/userReducer";
import adminReducer from "./adminReducer/adminReducer";
import langReducer from "./langReducer/langReducer";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    adminReducer: adminReducer,
    langReducer: langReducer,
  },
});
