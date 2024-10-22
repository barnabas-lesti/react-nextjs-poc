import { type Metadata } from "next";

import { getUserAsync, getUserId } from "#core/auth/data";
import { Link } from "#ui/link/component";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async () => {
  const userId = getUserId();
  const user = await getUserAsync();

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
