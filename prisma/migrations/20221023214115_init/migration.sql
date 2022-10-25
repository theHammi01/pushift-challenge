-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "thumbnail" TEXT,
    "upvotes" INTEGER NOT NULL,
    "comments" INTEGER NOT NULL,
    "faved" BOOLEAN NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
