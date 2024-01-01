import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createFlashCard,
  fetchFlashCards,
  removeFlashCard,
  updateFlashCard,
  updateOrderOfFlashCard,
  updateStatusOfFlashCard,
} from "../../api/flashcards";

export const createCard = createAsyncThunk(
  "card/createCard",
  async (
    {
      text,
      question,
      image,
      answer,
      description,
      answerImage,
      dateTime,
      status,
    },
    thunkAPI
  ) => {
    try {
      const data = await createFlashCard({
        text,
        question,
        image,
        answer,
        description,
        answerImage,
        dateTime,
        status,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error has occured.");
    }
  }
);

export const getCards = createAsyncThunk(
  "card/getCards",
  async (_, thunkAPI) => {
    try {
      const data = await fetchFlashCards();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error has occured.");
    }
  }
);

export const updateCard = createAsyncThunk(
  "card/updateCard",
  async (
    { id, text, question, image, answer, description, answerImage, dateTime },
    thunkAPI
  ) => {
    try {
      const data = await updateFlashCard({
        id,
        text,
        question,
        image,
        answer,
        description,
        answerImage,
        dateTime,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error has occured.");
    }
  }
);

export const updateStatus = createAsyncThunk(
  "card/updateStatus",
  async ({ id, status }, thunkAPI) => {
    try {
      const data = await updateStatusOfFlashCard({
        id,
        status,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error has occured.");
    }
  }
);

export const updateOrder = createAsyncThunk(
  "card/updateOrder",
  async ({ id, order }, thunkAPI) => {
    try {
      const data = await updateOrderOfFlashCard({
        id,
        order,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error has occured.");
    }
  }
);

export const deleteCard = createAsyncThunk(
  "card/deleteCard",
  async ({ id }, thunkAPI) => {
    try {
      const data = await removeFlashCard({
        id,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error has occured.");
    }
  }
);
