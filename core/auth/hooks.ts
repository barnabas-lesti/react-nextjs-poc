import { useAuth } from "@clerk/nextjs";

export const useUser = () => {
  const { isLoaded, isSignedIn, userId, signOut } = useAuth();
  return { isLoaded, isSignedIn, userId, signOut };
};
