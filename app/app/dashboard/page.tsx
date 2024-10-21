import { type Metadata } from "next";

import { Link } from "#ui/link/component";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default () => {
  return (
    <>
      <h1>Dashboard</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
};
