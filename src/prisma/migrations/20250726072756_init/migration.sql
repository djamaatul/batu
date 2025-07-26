/*
  Warnings:

  - You are about to drop the column `project_role_id` on the `project_roles_access` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "project_roles_access" DROP CONSTRAINT "project_roles_access_project_role_id_fkey";

-- AlterTable
ALTER TABLE "project_roles_access" DROP COLUMN "project_role_id",
ADD COLUMN     "project_rolesId" TEXT;

-- AddForeignKey
ALTER TABLE "project_roles_access" ADD CONSTRAINT "project_roles_access_project_rolesId_fkey" FOREIGN KEY ("project_rolesId") REFERENCES "project_roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
