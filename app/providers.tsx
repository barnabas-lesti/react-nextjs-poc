import { ClerkProvider } from "@clerk/nextjs";

import { ThemeProvider } from "#ui/theme/provider";

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <ClerkProvider>
      <ThemeProvider>{props.children}</ThemeProvider>{" "}
    </ClerkProvider>
  );
};
