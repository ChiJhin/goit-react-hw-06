import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  { id: "id-5", name: "Andrian Pan", number: "459444-12-56" },
  { id: "id-6", name: "Yura Robin", number: "44124-839-12" },
  { id: "id-7", name: "Ira Comandik", number: "64324-14237-79" },
  { id: "id-8", name: "Diana TopGun", number: "22567-941-26" },
];

const numberSlice = createSlice({
  name: "numbers",
  initialState: initialState,
  reducers: {
    deleteNumber: (state, action) => {
      return state.filter((number) => number.id !== action.payload);
    },
    addNumber: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { deleteNumber, addNumber } = numberSlice.actions;
export const numberReducer = numberSlice.reducer;
