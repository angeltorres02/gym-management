/*
  Warnings:

  - You are about to drop the column `status` on the `Client` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "role" AS ENUM ('admin', 'owner');

-- CreateEnum
CREATE TYPE "clientStatus" AS ENUM ('active', 'inactive', 'unknown');

-- CreateEnum
CREATE TYPE "userStatus" AS ENUM ('active', 'inactive');

-- CreateEnum
CREATE TYPE "paymentStatus" AS ENUM ('pending', 'completed');

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "status",
ADD COLUMN     "clientStatus" TEXT NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE "Payments" ALTER COLUMN "paymentStatus" SET DEFAULT 'pending';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active';
