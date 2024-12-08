This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
First, run the development server:
```bash
pnpm i ; pnpm dev
```
open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
you can start editing the page by modifying `app/page.tsx`. the page auto-updates as you edit the file.
this project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## steps How this repo got generated
1. goto https://fajarwz.com/blog/email-authentication-and-verification-in-nextjs-14-with-next-auth-and-prisma/
2. npx create-next-app@latest blog_nextjs_auth
Select the following options during the prompts:
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
src/ Directory: Yes
App Router: Yes
Custom Import Alias (@/*): No
3. pnpm i ; pnpm dev
4. check localhost:3000 openińg
5. pnpm install prisma --save-dev
6. pnpm install @next-auth/prisma-adapter
7. npx prisma init
8. update your prisma/schema.prisma
9. psql -U postgres ; CREATE DATABASE blog_nextjs_auth;
8. in .env set postgres param : DATABASE_URL="postgresql://<username>:<password>@localhost:5432/ blog_nextjs_auth?schema=public"
9. npx prisma db push

