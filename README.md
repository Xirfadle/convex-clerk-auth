# Convex Starter with Clerk Authentication

This repository showcases the integration of Clerk authentication with a Convex backend in a Next.js application. It's designed for developers building real-time apps with user authentication.

## Next.js 14 for the frontend

Convex as the backend and real-time database
Clerk for user authentication and management
TypeScript support
TailwindCSS for styling

## Prerequisites

- Before you begin, ensure you have the following installed:

- Node.js (LTS version recommended)
  npm, yarn, or pnpm

## Set up environment variables

- Copy the .env.sample.example file to .env.local
- Fill in the required environment variables (Convex and Clerk keys)

### First, run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure

1. app/: Contains the Next.js pages and components
2. convex/: Houses the Convex backend code
3. middleware.ts: Configures Clerk authentication middleware

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
