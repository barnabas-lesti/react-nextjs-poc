import { auth, currentUser } from "@clerk/nextjs/server";

export const fetchUser = currentUser;

export const getUserId = () => {
  const { userId } = auth();
  return userId;
};
