/*
  Warnings:

  - Added the required column `reason` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payments" ADD COLUMN     "reason" TEXT NOT NULL;
