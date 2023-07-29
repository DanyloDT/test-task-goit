import { createSlice } from "@reduxjs/toolkit";

import { getTweetsThunk } from "./operations";

const initialState = {
  tweets: [],
  isFollowing: "false",
  loading: "false",
  error: null,
};
const pending = (state) => {
  state.loading = true;
  state.error = "";
};
const rejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTweetsThunk.fulfilled, (state, action) => {
        state.tweets = action.payload;
        state.loading = false;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), pending)
      .addMatcher((action) => action.type.endsWith("/rejected"), rejected);
  },
});

export const tweetsReducer = tweetsSlice.reducer;
