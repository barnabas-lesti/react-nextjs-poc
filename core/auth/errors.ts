export class UserNotSignedInError extends Error {
  constructor() {
    super("User not signed in");
  }
}
