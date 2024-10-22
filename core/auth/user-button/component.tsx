"use client";

import { SignedIn, SignedOut, SignInButton, UserButton as ClerkUserButton } from "@clerk/nextjs";
import { styled } from "@mui/material";

import { Spinner } from "#ui/spinner/component";

import { useUser } from "../hooks";

const Container = styled("div")({
  height: "2rem",
  minWidth: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const UserButton = () => {
  const { isLoaded } = useUser();
  return (
    <Container>
      {isLoaded ? (
        <>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <ClerkUserButton />
          </SignedIn>
        </>
      ) : (
        <Spinner size="1.2rem" />
      )}
    </Container>
  );
};
