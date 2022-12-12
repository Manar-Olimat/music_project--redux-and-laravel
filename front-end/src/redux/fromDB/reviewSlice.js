/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReviews = createAsyncThunk(
  "reviewSlice/getReviews",
  async () => {
    return await axios
      .get("http://127.0.0.1:8000/api/reviews")
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
);

const initialState = {
  reviews: [],
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    createReview: (state, action) => {},

    deleteReview: (state, action) => {},
  },
  extraReducers: {
    [getReviews.pending]: (state) => {
      state.status = "Pending";
    },

    [getReviews.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.data = action.payload;
    },

    [getReviews.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

export const { createReview, deleteReview } = reviewSlice.actions;

export default reviewSlice.reducer;
