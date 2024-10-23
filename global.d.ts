declare namespace NodeJS {
  interface ProcessEnv {
    readonly CI: string | undefined;
    readonly NEXT_RUNTIME: "nodejs" | "edge";
    readonly NEXT_TELEMETRY_DISABLED: "0" | "1" | undefined;

    // Auth
    // https://dashboard.clerk.com/apps/app_2nlQdHFozTPERS7XLm97usZlOj6/instances/ins_2nlQdK753qKgacGBlvcKYc4kp3c/api-keys
    readonly NEXT_PUBLIC_CLERK_SIGN_IN_URL: string;
    readonly NEXT_PUBLIC_CLERK_SIGN_UP_URL: string;
    readonly NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
    readonly CLERK_SECRET_KEY: string;

    // Storage
    // https://cloud.mongodb.com/v2/6717b26e897b77774c07d672#/overview
    readonly MONGODB_URI: string;
  }
}
