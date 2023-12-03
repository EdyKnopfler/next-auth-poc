import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',

      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials /*, req*/) {
        const response = {  // await fetch('...')
          user: { id: '1', name: 'Kânia', email: 'kania@psim.com' },
        }

        return response.user  // null
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }