/*
  Warnings:

  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
ADD COLUMN     "postId" SERIAL NOT NULL,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("postId");
