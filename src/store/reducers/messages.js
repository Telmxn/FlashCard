import { createSlice } from "@reduxjs/toolkit";
import { sendMessage } from "../actions/messageThunk";

const initialState = {
  messages: [],
  status: "nothing",
  error: "",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendMessage.fulfilled, (state, { payload }) => {
        state.messages = payload;
        state.status = "fulfilled";
      })
      .addCase(sendMessage.rejected, (state, { payload }) => {
        state.status = "error";
        state.messages = [];
        state.error = payload;
      });
  },
});

export default messageSlice.reducer;
