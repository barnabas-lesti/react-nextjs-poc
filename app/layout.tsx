import type { Metadata } from "next";

import { type NextLayoutProps } from "#core/types";

import "./globals.css";

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
      <body>{props.children}</body>
    </html>
  );
};
