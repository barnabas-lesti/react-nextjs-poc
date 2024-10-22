import { UserButton } from "#core/auth/user-button/component";
import { Link } from "#ui/link/component";

export default () => {
  return (
    <>
      <header style={{ display: "flex" }}>
        <UserButton />
      </header>
      <h1>Home</h1>
      <p>
        <Link href="/app/dashboard">Dashboard</Link>
      </p>
      <p>
        <Link href="/example">Example</Link>
      </p>
    </>
  );
};
