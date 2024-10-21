import { Link } from "#ui/link/component";

export const Header = () => {
  return (
    <header>
      <Link href="/register">Register</Link>
      <Link href="/login">Login</Link>
    </header>
  );
};
