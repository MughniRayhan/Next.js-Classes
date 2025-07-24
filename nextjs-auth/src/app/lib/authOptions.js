import dbConnect from "@/app/lib/dbConnect"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
  CredentialsProvider({
    name: "Credentials",

    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" },
      email: { label: "Email", type: "email", placeholder: "jsmith@example.com" }
    },
    
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      const { username, password, email } = credentials;
      const user = await dbConnect("users").findOne({username})

      const isValidPassword = user.password === password;  

      if (user && isValidPassword) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
],
  callbacks: {
     async signIn({ user, account, profile, email, credentials }) {
        if(account){
            try {
                // console.log("From Callbacks", { user, account, profile, email, credentials });
             const {providerAccountId,provider} = account;
        const {name, email, image} = profile;
        const payload = {role: "user", providerAccountId, provider, name, email, image};
        console.log("From Callbacks", payload);
        const existingUser = await dbConnect("users").findOne({providerAccountId});

        if(!existingUser){
            await dbConnect("users").insertOne(payload);
        }
            } catch (error) {
                console.log(error)
                return false; // Reject sign-in if there's an error
            }

        }
       
      return true
    },
    async session({ session, user, token }) {
      if(token){
        session.user.username = token.username
        session.user.role = token.role
      }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.username = user.username
        token.role = user.role
      }
      return token
    }
}
}