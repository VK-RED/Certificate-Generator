-- CreateTable
CREATE TABLE "Template" (
    "id" INTEGER NOT NULL DEFAULT 0,
    "cert" BYTEA NOT NULL,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);
