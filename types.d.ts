import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    user: string;
    role?: string;
  }

  interface Session extends DefaultSession {
    user: {
      role?: string;
    } & DefaultSession["admin"];
    user: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    user: string;
  }
}
