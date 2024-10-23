/** @type {string[]} */
const REQUIRED_ENV_VARIABLES = [
  "NEXT_PUBLIC_CLERK_SIGN_IN_URL",
  "NEXT_PUBLIC_CLERK_SIGN_UP_URL",
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
  "CLERK_SECRET_KEY",
  "MONGODB_URI",
];

/** @type {import('next').NextConfig} */
const NEXT_CONFIG = {
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

/**
 * Checks `process.env` for environment variables and throws error if any is missing.
 * @param {string[]} requiredEnvVariables Required environment variables.
 * @throws {Error} Thrown if required variables are not set.
 */
const verifyRequiredEnvVariables = (requiredEnvVariables) => {
  const processEnvKeys = Object.keys(process.env);
  const missingEnvVariables = [];

  for (const envVariable of requiredEnvVariables) {
    if (!processEnvKeys.includes(envVariable)) {
      missingEnvVariables.push(envVariable);
    }
  }

  if (missingEnvVariables.length > 0) {
    const missingEnvVariablesString = missingEnvVariables.map((envVariable) => `"${envVariable}"`).join(", ");
    throw new Error(`Missing required env variables: ${missingEnvVariablesString}.`);
  }
};

verifyRequiredEnvVariables(REQUIRED_ENV_VARIABLES);

export default NEXT_CONFIG;
