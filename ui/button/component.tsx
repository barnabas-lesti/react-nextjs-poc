import { Button } from "@mui/material";

import { type UiButtonComponentProps } from "./types";

export const UiButtonComponent = (props: UiButtonComponentProps) => {
  return (
    <Button
      {...props}
      variant="contained"
    />
  );
};
