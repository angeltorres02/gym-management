import LoginPage from "@/components/SignIn/LoginPage";
import { SessionProvider } from "next-auth/react";

export default function Homepage() {
  return (
    <SessionProvider>
      <LoginPage />;
    </SessionProvider>
  );
}
