# Next.js Data Fetching & Authentication 

This project demonstrates two core concepts in Next.js: **data fetching** and **authentication** using [NextAuth.js](https://next-auth.js.org/).

---

## 1. Data Fetching in Next.js

Next.js supports multiple data fetching strategies:

### a. Static Site Generation (SSG)

Use `getStaticProps` to fetch data at build time. This is ideal for pages that can be pre-rendered and don't change often.

```javascript
export async function getStaticProps() {
  const data = await fetchDataFromAPI();
  return { props: { data } };
}
```

### b. Server-Side Rendering (SSR)

Use `getServerSideProps` to fetch data on each request. This is useful for dynamic data that changes frequently.

```javascript
export async function getServerSideProps(context) {
  const data = await fetchDataFromAPI();
  return { props: { data } };
}
```

### c. Client-Side Fetching

Use React hooks like `useEffect` and `fetch` or libraries like SWR for client-side data fetching.

```javascript
import { useEffect, useState } from "react";

function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then(res => res.json())
      .then(setData);
  }, []);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}
```

---

## 2. Authentication in Next.js using NextAuth.js

This project uses [NextAuth.js](https://next-auth.js.org/) for authentication, supporting both credentials and Google OAuth.

### a. Providers

- **CredentialsProvider**: Allows users to sign in with username, password, and email.
- **GoogleProvider**: Enables Google OAuth sign-in.

### b. Authentication Flow

- On sign-in, NextAuth checks if the user exists in the database.
- If signing in with Google and the user does not exist, a new user is created.
- JWT tokens are used to store user information such as username and role.

### c. Example Callback Logic

```javascript
callbacks: {
  async signIn({ user, account, profile }) {
    // Check if user exists, create if not
    // Return true to allow sign-in, false to reject
  },
  async session({ session, token }) {
    // Attach username and role to session
    return session;
  },
  async jwt({ token, user }) {
    // Attach username and role to JWT token
    return token;
  }
}
```

### d. Usage

- Configure providers and callbacks in `authOptions.js`.
- Protect pages using the `useSession` hook from NextAuth.

---

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
