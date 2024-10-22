"use client";

import { useAppDispatch, useAppSelector } from "#store/hooks";

import { exampleActions } from "./store";

export const ExampleComponent = () => {
  const count = useAppSelector((state) => state.example.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2> Example component</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(exampleActions.increment())}>Increment</button>
      <button onClick={() => dispatch(exampleActions.decrement())}>Decrement</button>
    </div>
  );
};
