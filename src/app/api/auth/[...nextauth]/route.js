import prisma from "@/lib/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

const handler = NextAuth({
    session: {
      strategy: "jwt", // We want JWT-based session handling
    },
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          const { email, password } = credentials;
  
          // Find user in database
          const user = await prisma.users.findUnique({
            where: { email },
          });
  
          if (!user) {
            throw new Error("email invalido");
          }
  
          const isPasswordValid = await compare(password, user.password);
          if (!isPasswordValid) {
            throw new Error("senha invalida");
          }
  
          // Return user data for JWT
          return {
            id: user.user_id,
            username: user.username,
            email: user.email,
          };
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        // Add user information to token
        if (user) {
          token.id = user.id;
          token.username = user.username;
        }
        return token;
      },
      async session({ session, token }) {
        // Add user IDw to session object
        session.user.id = token.id;
        session.user.username = token.username;
        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET, // Store secret in .env
    jwt: {
      secret: process.env.NEXTAUTH_SECRET, // Use the same secret for JWT
    },
  });
  
  export { handler as GET, handler as POST };