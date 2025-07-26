/*
  Warnings:

  - You are about to drop the column `project_rolesId` on the `project_roles_access` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "project_roles_access" DROP CONSTRAINT "project_roles_access_project_role_id_fkey";

-- DropForeignKey
ALTER TABLE "project_roles_access" DROP CONSTRAINT "project_roles_access_project_rolesId_fkey";

-- AlterTable
ALTER TABLE "project_roles_access" DROP COLUMN "project_rolesId";

-- AddForeignKey
ALTER TABLE "project_roles_access" ADD CONSTRAINT "project_roles_access_project_role_id_fkey" FOREIGN KEY ("project_role_id") REFERENCES "project_roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
