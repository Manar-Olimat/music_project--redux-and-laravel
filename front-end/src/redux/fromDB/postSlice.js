/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("postSlice/getPosts", async () => {
  return await axios
    .get("http://127.0.0.1:8000/api/posts")
    .then((res) => res.data)
    .catch((error) => console.log(error));
});

const initialState = {
  users: [],
  status: "Pending",
};

const postSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    // createPost: (state, action) => {},
    // updatePost: (state, action) => {},
    // deletePost: (state, action) => {},
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "Pending";
    },

    [getPosts.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.data = action.payload;
    },

    [getPosts.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

// export const { createPost, updatePost, deletePost } = postSlice.actions;

export default postSlice.reducer;
