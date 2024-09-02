This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Prisma Database
1. Install Dependencies
```bash
npm i
```

1. Connect to Project
Start by connecting to your existing project and then run code in the CLI to link to the project locally.
```bash
vercel link
```
If you don’t already have a project to connect to, you can get started with a Postgres template.

2. Pull your latest environment variables
Run to make the latest environment variables available to your project locally.
```bash
vercel env pull .env.development.local
```
And rename env file to .env

3. Pushing schema updates
Run code below, after editing prisma/schema.prisma file.
```bash
npx prisma db push
```

4. Pulling schema updates
```bash
npx npx prisma pull
```

5. Editing Data on Database
- To add data directly to the database.
```bash
npx npx prisma studio
```
- Or, you can add data on prisma/seed.ts file and run "npm run seed"



