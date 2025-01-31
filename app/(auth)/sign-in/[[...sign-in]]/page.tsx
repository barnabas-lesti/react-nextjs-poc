import { SignIn } from "@clerk/nextjs";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to the application",
};

export default () => {
  return <SignIn />;
};
