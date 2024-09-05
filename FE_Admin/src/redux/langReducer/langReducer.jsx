import { createSlice } from "@reduxjs/toolkit";
import { storage } from "../../services/storage";

const initialState = {
  lang_id: storage.getLangId(),
};

const langReducer = createSlice({
  name: "langReducer",
  initialState,
  reducers: {
    changeLangId: (state, action) => {
      state.lang_id = action.payload;
    },
  },
});

export const { changeLangId } = langReducer.actions;

export default langReducer.reducer;
