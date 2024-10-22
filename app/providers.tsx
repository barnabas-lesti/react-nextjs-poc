import { AuthProvider } from "#core/auth/provider";
import { StoreProvider } from "#store/provider";
import { ThemeProvider } from "#ui/theme/provider";

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <AuthProvider>{props.children}</AuthProvider>
      </StoreProvider>
    </ThemeProvider>
  );
};
