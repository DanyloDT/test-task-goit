import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dropdown: "ALL",
};

const DropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    setDropdown: (state, action) => {
      state.dropdown = action.payload;
    },
  },
});

export const { setDropdown } = DropdownSlice.actions;
export const dropdownReducer = DropdownSlice.reducer;
