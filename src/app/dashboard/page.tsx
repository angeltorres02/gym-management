import { auth } from "@/auth";
import DashboardHomepage from "@/components/dashboard/DashboardHomepage";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return <DashboardHomepage />;
}
