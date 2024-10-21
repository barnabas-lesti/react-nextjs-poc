import { LinkComponent } from "#ui/link/component";

export const HeaderComponent = () => {
  return (
    <header style={{ padding: "1rem", display: "flex", justifyContent: "end" }}>
      <LinkComponent href="/login">Login</LinkComponent>
    </header>
  );
};
