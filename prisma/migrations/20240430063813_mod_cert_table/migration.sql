/*
  Warnings:

  - A unique constraint covering the columns `[userEmail]` on the table `Certificate` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Certificate_userName_key";

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_userEmail_key" ON "Certificate"("userEmail");
