import { configureStore } from "@reduxjs/toolkit";
import { tweetsReducer } from "./Tweets/slice";
import { dropdownReducer } from "./Dropdown/slice";

export const store = configureStore({
  reducer: { tweets: tweetsReducer, dropdown: dropdownReducer },
});
