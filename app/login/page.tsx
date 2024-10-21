import { type Metadata } from "next";

import { LinkComponent } from "#ui/link/component";

export const metadata: Metadata = {
  title: "Login",
};

export default () => {
  return (
    <>
      <h1>Login</h1>
      <p>
        <LinkComponent href="/">Home</LinkComponent>
      </p>
    </>
  );
};
