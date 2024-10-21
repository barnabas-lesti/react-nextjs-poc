import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";

import { type NextLayoutProps } from "#core/types";
import { Footer } from "#ui/footer/component";
import { Header } from "#ui/header/component";

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
    <html lang="en">
      <body className={globalFont.className}>
        <div className="layout">
          <Header />
          <main>{props.children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};
