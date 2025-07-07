/*
  Warnings:

  - You are about to drop the column `durationDays` on the `Membership` table. All the data in the column will be lost.
  - Added the required column `expirationDate` to the `Membership` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Membership" DROP COLUMN "durationDays",
ADD COLUMN     "expirationDate" TIMESTAMP(3) NOT NULL;
