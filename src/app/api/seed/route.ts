import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  await prisma.user.create({
    data: {
      name: "Luis Angel Vidal Torres",
      password: "$2a$10$lpcd4T02gPahOewqJitKn.6O5ZiegegrWC3BBbI/QzvdPG5PuxO0K",
      username: "anta",
    },
  });

  return new Response("Seeded database successfully", { status: 200 });
}
