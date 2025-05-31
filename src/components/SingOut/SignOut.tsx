"use client";

import { SendButton } from "../SignIn/SendButton";
import { FormEvent } from "react";
import { signOut } from "next-auth/react";

export const SignOut = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signOut({ callbackUrl: "/" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex text-font mx-6">
      <SendButton>Cerrar sesión</SendButton>
    </form>
  );
};
