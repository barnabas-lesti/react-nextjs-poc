import { Link } from "#ui/link/component";

export const Header = () => {
  return (
    <header style={{ padding: "1rem", display: "flex", justifyContent: "end" }}>
      <span style={{ marginRight: "1rem" }}>
        <Link href="/register">Register</Link>
      </span>
      <Link href="/login">Login</Link>
    </header>
  );
};
