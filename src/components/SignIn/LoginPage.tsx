"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Form } from "@/components/SignIn/Form";
import { Title } from "@/components/Title";

export default function LoginPage() {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && data) {
      router.push("/dashboard");
    }
  }, [data, status, router]);

  if (status === "authenticated") {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center text-font h-[80vh]">
      <Title />
      <Form />
    </div>
  );
}
