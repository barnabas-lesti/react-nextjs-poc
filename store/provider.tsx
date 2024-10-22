"use client";

import { useRef } from "react";
import { Provider } from "react-redux";

import { createStore } from "./config";
import { type AppStore } from "./types";

export const StoreProvider = (props: React.PropsWithChildren) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = createStore();
  }

  return <Provider store={storeRef.current}>{props.children}</Provider>;
};
