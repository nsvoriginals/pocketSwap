-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);
