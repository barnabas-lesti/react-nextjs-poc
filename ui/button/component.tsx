import { Button } from "@mui/material";

import { type ButtonComponentProps } from "./types";

export const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <Button
      {...props}
      variant="contained"
    />
  );
};
