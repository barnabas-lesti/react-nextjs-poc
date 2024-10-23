import { withSentryConfig } from "@sentry/nextjs";

/** @type {string[]} */
const REQUIRED_ENV_VARIABLES = [
  // Clerk
  "NEXT_PUBLIC_CLERK_SIGN_IN_URL",
  "NEXT_PUBLIC_CLERK_SIGN_UP_URL",
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
  "CLERK_SECRET_KEY",

  // MongoDB
  "MONGODB_URI",

  // Sentry
  "NEXT_PUBLIC_SENTRY_DSN",
  "SENTRY_ORG",
  "SENTRY_PROJECT",
  "SENTRY_AUTH_TOKEN",
];

validateProcessEnv();

/** @type {import('next').NextConfig} */
let NEXT_CONFIG = {
  async redirects() {
    return [
      {
        source: "/app",
        destination: "/app/dashboard",
        permanent: true,
      },
    ];
  },
};

NEXT_CONFIG = withSentryConfig(NEXT_CONFIG, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: !process.env.NEXT_PUBLIC_SENTRY_DISABLED,

  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/sentry",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
});

export default NEXT_CONFIG;

function validateProcessEnv() {
  const initializedEnvVariables = Object.keys(process.env);
  const missingEnvVariables = [];
  for (const requiredEnvVariable of REQUIRED_ENV_VARIABLES) {
    if (!initializedEnvVariables.includes(requiredEnvVariable)) {
      missingEnvVariables.push(requiredEnvVariable);
    }
  }

  if (missingEnvVariables.length > 0) {
    const missingEnvVariablesString = missingEnvVariables
      .map((missingEnvVariable) => `"${missingEnvVariable}"`)
      .join(", ");
    throw new Error(`Missing required env variables: ${missingEnvVariablesString}`);
  }
}
