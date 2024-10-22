import { type Metadata } from "next";

import { fetchUser, getUserId } from "#core/auth/functions";
import { Link } from "#ui/link/component";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async () => {
  const userId = getUserId();
  const user = await fetchUser();

  console.debug(userId);
  console.debug(user?.fullName);

  return (
    <>
      <h1>Dashboard</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
};
