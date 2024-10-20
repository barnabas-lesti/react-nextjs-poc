import { DEFAULT_EXAMPLE_NAME } from "./constants";
import { type ExampleComponentProps } from "./types";

export const ExampleComponent = (props: ExampleComponentProps) => {
  return <p>Hello {props.name || DEFAULT_EXAMPLE_NAME}!</p>;
};
