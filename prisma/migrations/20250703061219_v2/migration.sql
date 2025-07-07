/*
  Warnings:

  - The primary key for the `Client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Client` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Payments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Payments` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Record` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Record` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `clientId` on the `Payments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `clientId` on the `Record` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "membershipType" AS ENUM ('weekly', 'biweekly', 'monthly', 'bimensual', 'trimestral', 'semestral', 'annual');

-- DropForeignKey
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Record" DROP CONSTRAINT "Record_clientId_fkey";

-- AlterTable
ALTER TABLE "Client" DROP CONSTRAINT "Client_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Client_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "clientId",
ADD COLUMN     "clientId" INTEGER NOT NULL,
ADD CONSTRAINT "Payments_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Record" DROP CONSTRAINT "Record_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "clientId",
ADD COLUMN     "clientId" INTEGER NOT NULL,
ADD CONSTRAINT "Record_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Membership" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "initialDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "durationDays" INTEGER NOT NULL,

    CONSTRAINT "Membership_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Membership_clientId_key" ON "Membership"("clientId");

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
