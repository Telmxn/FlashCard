import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./reducers/messages";
import flashCardSlice from "./reducers/flashCards";

export const store = configureStore({
  reducer: {
    message: messageSlice,
    card: flashCardSlice,
  },
});
