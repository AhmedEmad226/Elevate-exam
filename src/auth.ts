import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { CONTENT_TYPE } from "./lib/constants/api.constants";
import GoogleProvider from "next-auth/providers/google";

// 1- configure Nextauth options here
// 2- MUST create route 'handler' in src/app/api/auth/[...nextauth]/route.ts

export const authOptions: NextAuthOptions = {
  //  redirects the user after specific actions, like signin, signout, verify etc...
  pages: {
    signIn: "/login",
  },
  //  adding the available ways to login, providers like google, github; custom manually typing email or password
  providers: [
    //  for custom Login
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (Credentials) => {
        // checking data and preforming logic according to it
        const response = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: Credentials?.email,
            password: Credentials?.password,
          }),
          headers: {
            ...CONTENT_TYPE,
          },
        });

        const payload: APIResponse<LoginResponse> = await response.json();

        if ("code" in payload) {
          throw new Error(payload.message);
        } else {
          return {
            id: payload.user._id,
            token: payload.token,
            user: payload.user,
          };
        }
      },
    }),

    // Google uses GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET to sign in
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  //  callbacks is like doing logic in specific timing, like signing-in, creating jwt or redirecting
  callbacks: {
    // it saves the data coming from the authorize() return then decode it into jwt code
    jwt: ({ token, user, profile }) => {
      // !! NOTE: we Must check if there is user or profile or not !!
      // or jwt will replace their values with undefined

      // decodes the data from the user (authorize's payload) then decoded it and save it to the token
      if (user) {
        token.token = user.token;
        token.user = user.user;
      } else if (profile) {
        token.user.email = profile.email || "";
        token.user.firstName = profile.given_name;
        token.user.lastName = profile.family_name;
        token.user.isVerified = profile.email_verified;
      }

      return token; //  must return the token to use it
    },

    //  session stores the data we need to display to the use
    //  no sensitive data is stored here
    session: ({ session, token }) => {
      session.user = token.user;
      return session; // must return the session to use it
    },
  },
};
