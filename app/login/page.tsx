import { type Metadata } from "next";

import { Link } from "#ui/link/component";

export const metadata: Metadata = {
  title: "Login",
};

export default () => {
  return (
    <>
      <h1>Login</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
};
