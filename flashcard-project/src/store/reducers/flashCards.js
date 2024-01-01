import { createSlice } from "@reduxjs/toolkit";
import {
  createCard,
  deleteCard,
  getCards,
  updateCard,
  updateOrder,
  updateStatus,
} from "../actions/flashCardThunk";

const initialState = {
  cards: [],
  status: "nothing",
  error: "",
};

export const flashCardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCard.fulfilled, (state, { payload }) => {
        state.cards = payload;
        state.status = "fulfilled";
      })
      .addCase(createCard.rejected, (state, { payload }) => {
        state.status = "error";
        state.cards = [];
        state.error = payload;
      })
      .addCase(getCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCards.fulfilled, (state, { payload }) => {
        state.cards = payload;
        state.status = "fulfilled";
      })
      .addCase(getCards.rejected, (state, { payload }) => {
        state.status = "error";
        state.cards = [];
        state.error = payload;
      })
      .addCase(updateCard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCard.fulfilled, (state, { payload }) => {
        state.cards = payload;
        state.status = "fulfilled";
      })
      .addCase(updateCard.rejected, (state, { payload }) => {
        state.status = "error";
        state.cards = [];
        state.error = payload;
      })
      .addCase(updateStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateStatus.fulfilled, (state, { payload }) => {
        state.cards = payload;
        state.status = "fulfilled";
      })
      .addCase(updateStatus.rejected, (state, { payload }) => {
        state.status = "error";
        state.cards = [];
        state.error = payload;
      })
      .addCase(updateOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateOrder.fulfilled, (state, { payload }) => {
        state.cards = payload;
        state.status = "fulfilled";
      })
      .addCase(updateOrder.rejected, (state, { payload }) => {
        state.status = "error";
        state.cards = [];
        state.error = payload;
      })
      .addCase(deleteCard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCard.fulfilled, (state, { payload }) => {
        state.cards = payload;
        state.status = "fulfilled";
      })
      .addCase(deleteCard.rejected, (state, { payload }) => {
        state.status = "error";
        state.cards = [];
        state.error = payload;
      });
  },
});

export default flashCardSlice.reducer;
