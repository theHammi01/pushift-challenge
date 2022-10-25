/*
  Warnings:

  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `postId` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Made the column `id` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `author` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_utc` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `full_link` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `num_comments` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `score` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
DROP COLUMN "postId",
ALTER COLUMN "id" SET NOT NULL,
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "author" SET NOT NULL,
ALTER COLUMN "created_utc" SET NOT NULL,
ALTER COLUMN "full_link" SET NOT NULL,
ALTER COLUMN "num_comments" SET NOT NULL,
ALTER COLUMN "score" SET NOT NULL,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");
