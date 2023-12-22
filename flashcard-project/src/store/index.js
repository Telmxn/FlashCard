import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./reducers/messages";

export const store = configureStore({
  reducer: {
    message: messageSlice,
  },
});
