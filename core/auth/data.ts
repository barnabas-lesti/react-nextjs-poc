import { auth, currentUser } from "@clerk/nextjs/server";

export const getUserAsync = () => currentUser();

export const getUserId = () => {
  const { userId } = auth();
  return userId;
};
