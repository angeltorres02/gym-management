import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyPassword } from "@/utils/password";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class InvalidLoginError extends CredentialsSignin {
  code = "Credenciales no válidas";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        if (!username || !password) {
          throw new InvalidLoginError();
        }

        //verifica si el usuario existe
        user = await prisma.user.findUnique({
          where: { username: username },
        });

        if (!user) {
          throw new InvalidLoginError();
        }

        //verifica si la contraseña que nos dio el usuario coincide con nuestra base de datos
        const isValidPassword = await verifyPassword(password, user.password);
        if (!isValidPassword) {
          throw new InvalidLoginError();
        }

        return {
          id: user.id,
          name: user.name,
          role: user.role,
          user: user.username,
        };
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.username = user.user;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.username = token.username;

      return session;
    },
  },
});
