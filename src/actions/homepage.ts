"use server";
import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";

export const getLastPayments = async () => {
  const prisma = new PrismaClient();

  const pagos = await prisma.payments.findMany({
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

  const total = pagos.reduce((acc, prev) => prev.amount + acc, 0);

  return { pagos, total };
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

export const getMembershipSoonToExpire = async () => {
  const prisma = new PrismaClient();

  const membershipsSoonToExpire = await prisma.membership.findMany({
    take: 3,
    orderBy: {
      expirationDate: "asc",
    },
    include: {
      client: {
        select: {
          name: true,
        },
      },
    },
  });

  return membershipsSoonToExpire;
};

export const getActiveClients = async () => {
  const prisma = new PrismaClient();
  const fourMonthsAgo = new Date();
  fourMonthsAgo.setMonth(fourMonthsAgo.getMonth() - 3);

  const clients = await prisma.membership.findMany({
    where: {
      initialDate: {
        gte: fourMonthsAgo,
      },
    },
    select: {
      initialDate: true,
    },
  });

  const activeClients = clients.reduce(
    (acc: { [key: string]: number }, client) => {
      const monthYear = dayjs(client.initialDate).format("MM/YY");
      acc[monthYear] = (acc[monthYear] || 0) + 1;
      return acc;
    },
    {}
  );

  const result = [];
  for (let i = 3; i >= 0; i--) {
    const date = dayjs().subtract(i, "month");
    const monthYear = date.format("MM/YY");
    const monthName = date.format("MMMM");

    result.push({
      month: monthName.charAt(0).toUpperCase() + monthName.slice(1),
      count: activeClients[monthYear] || 0,
      monthYear,
    });
  }

  return result;
};
