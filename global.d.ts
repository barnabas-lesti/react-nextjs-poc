declare namespace NodeJS {
  interface ProcessEnv {
    // Base
    readonly NEXT_RUNTIME: "nodejs" | "edge";
    readonly CI: string | undefined;

    // Clerk
    readonly NEXT_PUBLIC_CLERK_SIGN_IN_URL: string;
    readonly NEXT_PUBLIC_CLERK_SIGN_UP_URL: string;
    readonly NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
    readonly CLERK_SECRET_KEY: string;

    // MongoDB
    readonly MONGODB_URI: string;

    // Sentry
    readonly NEXT_PUBLIC_SENTRY_DISABLED: string | undefined;
    readonly NEXT_PUBLIC_SENTRY_DSN: string;
    readonly SENTRY_ORG: string;
    readonly SENTRY_PROJECT: string;
    readonly SENTRY_AUTH_TOKEN: string;
  }
}
