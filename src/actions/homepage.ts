"use server";
import { PrismaClient } from "@prisma/client";

export const getLastPayments = async () => {
  const prisma = new PrismaClient();

  const pagos = await prisma.payments.findMany({
    take: 3,
    orderBy: {
      date: "desc",
    },
    include: {
      client: {
        select: {
          name: true,
        },
      },
    },
  });

  return pagos;
};

export const getLastPreviousPayments = async () => {
  const prisma = new PrismaClient();

  const previousPayments = await prisma.payments.findMany({
    take: 3,
    where: { paymentStatus: "pending" },
    orderBy: {
      date: "desc",
    },
    include: {
      client: {
        select: {
          name: true,
        },
      },
    },
  });

  return previousPayments;
};
