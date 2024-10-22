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
    template: "%s | Diary",
    default: "Diary",
  },
  description: "Diary web application",
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
