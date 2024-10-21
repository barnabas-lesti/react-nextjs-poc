import { type Metadata } from "next";

import { LinkComponent } from "#ui/link/component";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default () => {
  return (
    <>
      <h1>Dashboard</h1>
      <p>
        <LinkComponent href="/">Home</LinkComponent>
      </p>
    </>
  );
};
