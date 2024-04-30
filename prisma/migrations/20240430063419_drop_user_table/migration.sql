/*
  Warnings:

  - You are about to drop the column `userId` on the `Certificate` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userEmail,id]` on the table `Certificate` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_userId_userEmail_fkey";

-- DropIndex
DROP INDEX "Certificate_userId_userEmail_key";

-- AlterTable
ALTER TABLE "Certificate" DROP COLUMN "userId";

-- DropTable
DROP TABLE "User";

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_userEmail_id_key" ON "Certificate"("userEmail", "id");
