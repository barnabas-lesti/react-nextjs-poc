"use client";

import { CssBaseline } from "@mui/material";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { type PropsWithChildren } from "react";

import { THEME_CONFIG } from "./config";

export const ThemeProvider = (props: PropsWithChildren) => {
  return (
    <>
      <InitColorSchemeScript attribute="class" />
      <MuiThemeProvider
        theme={THEME_CONFIG}
        disableTransitionOnChange
      >
        <CssBaseline />
        {props.children}
      </MuiThemeProvider>
    </>
  );
};
