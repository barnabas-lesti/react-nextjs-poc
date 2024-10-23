# Development

## Adding new `process.env` variable

1. Update the `global.d.ts` files `ProcessEnv` interface (with documentation if needed).
   - If the variable is required to be set, update the `REQUIRED_ENV_VARIABLES` constant in `next.config.mjs`, this will prevent the app from starting if the required variables are missing.
2. Add the variable to the [Vercel project environment variables](https://vercel.com/barnabas-lesti-projects/diary/settings/environment-variables).
3. Update the `.env.local` file with the variable and its local value.
4. Use it in code via `process.env.VARIABLE_NAME`.

Read more about environment variables in the [NextJS docs](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables).
