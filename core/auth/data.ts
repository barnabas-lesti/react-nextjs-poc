import { auth, currentUser } from "@clerk/nextjs/server";

import { UserNotSignedInError } from "./errors";

export const getUserAsync = () => currentUser();

export const getUserIdSafe = () => {
  const { userId } = auth();
  return userId;
};

/**
 * @throws {UserNotSignedInError}
 */
export const getUserId = (): string => {
  const userId = getUserIdSafe();
  if (!userId) throw new UserNotSignedInError();
  return userId;
};
