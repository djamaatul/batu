/*
  Warnings:

  - You are about to drop the column `project_rolesId` on the `project_roles_access` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "project_roles_access" DROP CONSTRAINT "project_roles_access_project_rolesId_fkey";

-- AlterTable
ALTER TABLE "project_roles_access" DROP COLUMN "project_rolesId",
ADD COLUMN     "project_roles_id" TEXT;

-- AddForeignKey
ALTER TABLE "project_roles_access" ADD CONSTRAINT "project_roles_access_project_roles_id_fkey" FOREIGN KEY ("project_roles_id") REFERENCES "project_roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
