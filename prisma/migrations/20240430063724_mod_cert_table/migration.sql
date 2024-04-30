/*
  Warnings:

  - A unique constraint covering the columns `[userName]` on the table `Certificate` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Certificate_userEmail_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_userName_key" ON "Certificate"("userName");
