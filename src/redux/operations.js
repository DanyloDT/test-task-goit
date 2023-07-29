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
      //   console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
