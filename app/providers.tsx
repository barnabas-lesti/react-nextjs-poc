import { ThemeProvider } from "#ui/theme/provider";

export const Providers = (props: React.PropsWithChildren) => {
  return <ThemeProvider>{props.children}</ThemeProvider>;
};
