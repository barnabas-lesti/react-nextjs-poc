import { type Metadata } from "next";

import { Link } from "#ui/link/component";

export const metadata: Metadata = {
  title: "Register",
};

export default () => {
  return (
    <>
      <h1>Register</h1>
      <p>
        <Link href="/app/dashboard">Dashboard</Link>
      </p>
    </>
  );
};
