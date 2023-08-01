import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const mockApi = axios.create({
  baseURL: "https://64aeb805c85640541d4d97b7.mockapi.io",
});

export const getTweetsThunk = createAsyncThunk(
  "tweets/getTweets",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await mockApi.get("/tweets");

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const putTweetsThunk = createAsyncThunk(
  "tweets/patchTweets",
  async ({ id, followers, isFollowing }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await mockApi.put(`/tweets/${id}`, {
        followers,
        isFollowing,
      });
      dispatch(getTweetsThunk());

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
