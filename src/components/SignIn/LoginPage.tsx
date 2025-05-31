"use client";

import { Form } from "@/components/SignIn/Form";
import { Title } from "@/components/Title";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center text-font h-[80vh]">
      <Title />
      <Form />
    </div>
  );
}
