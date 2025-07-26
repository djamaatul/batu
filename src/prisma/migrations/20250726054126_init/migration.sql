/*
  Warnings:

  - You are about to drop the column `createAt` on the `users` table. All the data in the column will be lost.
  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "createAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;
