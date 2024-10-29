# React NextJS PoC

Web application sandbox project using React with NextJS.

## Prerequisites

- [NodeJS](https://nodejs.org/)
  - This will also install `npm`, make sure both are added to the `path` and available in terminal.
  - It is a good idea to use [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) to manage NodeJS. It can easily help to switch NodeJS versions when working in multiple repositories.
- [Git](https://git-scm.com/)
  - To commit changes, can be skipped if you just want to check out the app.
- [bun](https://bun.sh/)
  - Faster and more robust package manager than `npm`.
- [Vercel CLI](https://vercel.com/docs/cli)
  - Vercel utility for example to download `.env` files.
- [Visual Studio Code](https://code.visualstudio.com/)
  - Other IDE can be used of course, but there are added settings for VSCode in the project.
  - Once the project is opened in VSCode, install the recommended extensions.

## Running the app locally

1. Install required dependencies with `bun i`.
2. Download (or create by hand) the `.env.local` config file:
   1. Log in with `vercel login`.
   2. Link local project with `vercel link`.
   3. Download the `.env.local` file with `vercel env pull`.
3. Start the app with `bun dev`.

There are of course more scripts available, check out the [package.json](./package.json) for more information.

## Dashboards and integrations

- [Deployment](https://vercel.com/barnabas-lesti-my-team/react-nextjs-poc)
- [UI](https://mui.com/material-ui/getting-started/)
- [Auth](https://dashboard.clerk.com/apps/app_2nlQdHFozTPERS7XLm97usZlOj6/instances/ins_2nlQdK753qKgacGBlvcKYc4kp3c)
- [Storage](https://cloud.mongodb.com/v2/6717b26e897b77774c07d672)

## Documentation

- [Development](./docs/development.md)
