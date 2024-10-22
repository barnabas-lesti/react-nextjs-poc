import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type RootState } from "#store/types";

// Define a type for the slice state
export interface ExampleState {
  value: number;
}

// Define the initial state using that type
const initialState: ExampleState = {
  value: 0,
};

export const exampleSlice = createSlice({
  name: "example",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const exampleActions = exampleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.example.value;

export const exampleReducer = exampleSlice.reducer;
