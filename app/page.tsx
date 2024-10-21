import { LinkComponent } from "#ui/link/component";

export default () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        <LinkComponent href="/app/dashboard">Dashboard</LinkComponent>
      </p>
      <p>
        <LinkComponent href="/login">Login</LinkComponent>
      </p>
    </>
  );
};
