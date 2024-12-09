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
  1. Select the following options during the prompts:
  1. TypeScript: Yes
  1. ESLint: Yes
  1. Tailwind CSS: Yes
  1. src/ Directory: Yes
  1. App Router: Yes
  1. Custom Import Alias (@/*): No
3. pnpm i ; pnpm dev
4. check localhost:3000 openińg
5. pnpm install prisma --save-dev
6. pnpm install @next-auth/prisma-adapter
7. npx prisma init
8. update your prisma/schema.prisma
9. https://vercel.com/guides/unable-to-find-github-repository
1. If the repository is missing, click “Configure GitHub App” to see if the GitHub repository has access granted to Vercel.
1. configure from your GitHub Profile > Settings > Applications > vercel . give access to this blog_nextjs_auth repo 
1. psql -U postgres ; CREATE DATABASE blog_nextjs_auth;
1. in .env set postgres param : DATABASE_URL="postgresql://<username>:<password>@localhost:5432/ blog_nextjs_auth?schema=public"
1. npx prisma db push
1. pnpm install zod
1. npm install bcryptjs @types/bcryptjs
  1. this library enables secure password hashing, safeguarding user credentials in our database.
  1. authentication logic by installing bcryptjs
1. npm install nodemailer @types/nodemailer --legacy-peer-deps
1. npm install next-auth@beta
  1. openssl rand -base64 32
  1. This command produces a cryptographically secure random string
  1. which you can then assign to AUTH_SECRET in your .env file. Here’s an example snippet
  1. AUTH_SECRET=
  1. in .gitignore .env must be there
1. setting up nextàuth configuration
  1. // src/auth.config.ts
1. Step 8: Implementing Authentication Logic
  1. // src/auth.ts
1. Step 9: Middleware for Authentication
  1. // src/middleware.ts
1. Step 10: Routing Authentication API Endpoints
  1. // src/app/api/auth/[...nextauth]/route.ts
### supabase projects
1. https://github.com/salmandotweb/nextjs-supabase-boilerplate
1. https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
#### best githubber for supabase + nextjs
1. https://www.youtube.com/watch?v=iJpTo1Kwb0g
1. https://www.youtube.com/@DailyWebCoding/playlists?view=1&sort=dd&flow=grid
1. https://github.com/Chensokheng?tab=repositories&q=next&type=&language=&sort=

### saas boilerplates
1. https://www.saaspegasus.com/guides/saas-boilerplates-and-starter-kits/
1. https://www.apptension.com/saas-boilerplate
1. https://github.com/apptension/saas-boilerplate
