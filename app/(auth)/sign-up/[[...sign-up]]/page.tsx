import { SignUp } from "@clerk/nextjs";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up to use Diary",
};

export default () => {
  return <SignUp />;
};
