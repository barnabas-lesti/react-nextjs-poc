"use client";

import { styled } from "@mui/material";

import { useUser } from "#core/auth/hooks";
import { type NextLayoutProps } from "#core/types";
import { Spinner } from "#ui/spinner/component";

const Container = styled("main")({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default (props: NextLayoutProps) => {
  const { isLoaded } = useUser();
  return <Container>{isLoaded ? props.children : <Spinner />}</Container>;
};
