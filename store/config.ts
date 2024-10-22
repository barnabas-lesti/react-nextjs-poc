import { configureStore } from "@reduxjs/toolkit";

import { exampleReducer } from "#features/example/store";

export const createStore = () =>
  configureStore({
    reducer: {
      example: exampleReducer,
    },
  });
