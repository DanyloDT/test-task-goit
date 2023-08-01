import { createSelector } from "@reduxjs/toolkit";
export const selectTweets = (state) => state.tweets.tweets;
export const selectDropdown = (state) => state.dropdown.dropdown;

export const selectDropdownFilter = createSelector(
  [selectTweets, selectDropdown],

  (tweets, dropdown) => {
    switch (dropdown) {
      case "FOLLOW":
        return tweets.filter((task) => !task.isFollowing);
      case "FOLLOWING":
        return tweets.filter((task) => task.isFollowing);
      default:
        return tweets;
    }
  }
);
