"use client";

import { signIn } from "next-auth/react";
import { Input } from "./Input";
import { SendButton } from "./SendButton";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export const Form = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      if (username.length < 2 || password.length < 2) {
        return;
      }

      const result = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Credenciales no válidas");
      } else if (result?.ok) {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      setError("Ocurrió un error al iniciar sesión. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-12 mt-10 justify-center items-center"
      onSubmit={handleSubmit}
    >
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <div className="flex gap-20 ">
        <Input label="Usuario" type="text" name="username" />
        <Input label="Contraseña" type="password" name="password" />
      </div>
      <SendButton disabled={isLoading} className="w-[40%]">
        {isLoading ? "Procesando..." : "Ingresar"}
      </SendButton>
    </form>
  );
};
