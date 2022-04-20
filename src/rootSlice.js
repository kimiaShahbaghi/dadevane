import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    gender: "",
    checked: "true",
  },
  reducers: {
    selectGender: (state, action) => {
      state.gender = action.payload;
    },
    isChecked: (state, action) => {
      state.checked = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;
export const { selectGender, isChecked } = rootSlice.actions;
