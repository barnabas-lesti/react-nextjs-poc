import { fetchUser } from "#core/auth/data";

export const GET = async () => {
  const user = await fetchUser();
  return Response.json({ userFullName: user?.fullName });
};
