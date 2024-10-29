import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";

import { type NextLayoutProps } from "#core/types";

import { Providers } from "./providers";

import "./globals.css";

const globalFont = Roboto_Flex({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | App",
    default: "App",
  },
  description: "Web application with React and NextJS",
};

export default (props: NextLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={globalFont.className}>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
};
