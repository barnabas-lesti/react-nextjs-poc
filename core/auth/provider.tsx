"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { useIsDarkMode } from "#ui/theme/hooks";

export const AuthProvider = (props: React.PropsWithChildren) => {
  const isDarkMode = useIsDarkMode();
  return (
    <ClerkProvider
      appearance={{
        baseTheme: isDarkMode ? dark : undefined,
      }}
    >
      {props.children}
    </ClerkProvider>
  );
};
