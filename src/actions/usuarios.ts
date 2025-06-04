"use server";
import { PrismaClient } from "@prisma/client";

export const getAllClients = async () => {
  const prisma = new PrismaClient();
  const usuarios = await prisma.client.findMany();

  return usuarios;
};

export const getAllUsers = async () => {
  const prisma = new PrismaClient();
  const usuarios = await prisma.user.findMany();

  return usuarios;
};

export const getAllPayments = async () => {
  const prisma = new PrismaClient();
  const pagos = await prisma.payments.findMany({
    include: {
      client: {
        select: {
          name: true,
        },
      },
    },
  });
  console.log(pagos);

  return pagos;
};
