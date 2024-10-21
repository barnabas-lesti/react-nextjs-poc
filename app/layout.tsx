import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";

import { type NextLayoutProps } from "#core/types";
import { FooterComponent } from "#ui/footer/component";
import { HeaderComponent } from "#ui/header/component";

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
          <HeaderComponent />
          <main>{props.children}</main>
          <FooterComponent />
        </div>
      </body>
    </html>
  );
};
