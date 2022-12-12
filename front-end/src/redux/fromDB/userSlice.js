/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("userSlice/getUsers", async () => {
  return await axios
    .get("http://127.0.0.1:8000/api/users")
    .then((res) => res.data)
    .catch((error) => console.log(error));
});

const initialState = {
  users: [],
  status: "Pending",
};

const userSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    createUser: (state, action) => {},

    updateUser: (state, action) => {},
    deleteUser: (state, action) => {},
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = "Pending";
    },

    [getUsers.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.data = action.payload;
    },

    [getUsers.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

export const { createUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
