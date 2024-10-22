import { AuthProvider } from "#core/auth/provider";
import { ThemeProvider } from "#ui/theme/provider";

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AuthProvider>{props.children}</AuthProvider>
    </ThemeProvider>
  );
};
