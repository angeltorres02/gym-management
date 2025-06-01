"use server";
import { PrismaClient } from "@prisma/client";

export const getAllClients = async () => {
  const prisma = new PrismaClient();
  const usuarios = await prisma.client.findMany();

  return usuarios;
};
