import { fetchUser } from "#core/auth/functions";

export const GET = async () => {
  const user = await fetchUser();
  return Response.json({ userFullName: user?.fullName });
};
