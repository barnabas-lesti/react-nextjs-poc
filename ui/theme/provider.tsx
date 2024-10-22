"use client";

import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

import { THEME_CONFIG } from "./config";

export const ThemeProvider = (props: React.PropsWithChildren) => {
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
