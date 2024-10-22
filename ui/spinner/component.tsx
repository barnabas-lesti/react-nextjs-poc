import { CircularProgress } from "@mui/material";

import { type SpinnerProps } from "./types";

export const Spinner = (props: SpinnerProps) => {
  return <CircularProgress size={props.size} />;
};
