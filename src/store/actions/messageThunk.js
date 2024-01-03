import { createAsyncThunk } from "@reduxjs/toolkit";
import { createMessage } from "../../api/messages";

export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async ({ id, name, email, subject, message }, thunkAPI) => {
    try {
      const data = await createMessage({ id, name, email, subject, message });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error occured.");
    }
  }
);
