/*
  Warnings:

  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `comments` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `faved` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `upvotes` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `Post` table. All the data in the column will be lost.
  - Added the required column `author` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_utc` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_link` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `num_comments` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
DROP COLUMN "comments",
DROP COLUMN "faved",
DROP COLUMN "link",
DROP COLUMN "time",
DROP COLUMN "upvotes",
DROP COLUMN "user",
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "created_utc" INTEGER NOT NULL,
ADD COLUMN     "full_link" TEXT NOT NULL,
ADD COLUMN     "num_comments" INTEGER NOT NULL,
ADD COLUMN     "score" INTEGER NOT NULL,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("id");
