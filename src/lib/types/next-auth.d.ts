/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { DefaultSession, User } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    token: string;
    user: APIUser;
  }

  interface Profile {
    email: string;
    email_verified: boolean;
    picture: string;
    name: string;
    given_name: string;
    family_name: string;
  }

  interface Session {
    user: APIUser;
  }
}

declare module "next-auth/jwt" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface JWT extends User {}
}
