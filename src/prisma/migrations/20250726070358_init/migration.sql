/*
  Warnings:

  - You are about to drop the column `role_id` on the `project_members` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `task_comments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `user_roles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[role_id]` on the table `user_roles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `project_id` to the `project_columns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_role_id` to the `project_members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_role_id` to the `project_roles_access` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_id` to the `project_tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `role_access` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_id` to the `task_comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `user_roles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "project_columns" ADD COLUMN     "project_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "project_members" DROP COLUMN "role_id",
ADD COLUMN     "project_role_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "project_roles_access" ADD COLUMN     "project_role_id" TEXT NOT NULL,
ADD COLUMN     "project_rolesId" TEXT;

-- AlterTable
ALTER TABLE "project_tasks" ADD COLUMN     "project_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "role_access" ADD COLUMN     "role_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "task_comments" ADD COLUMN     "task_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user_roles" ADD COLUMN     "role_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "task_comments_user_id_key" ON "task_comments"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_user_id_key" ON "user_roles"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_role_id_key" ON "user_roles"("role_id");

-- AddForeignKey
ALTER TABLE "role_access" ADD CONSTRAINT "role_access_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_columns" ADD CONSTRAINT "project_columns_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_roles_access" ADD CONSTRAINT "project_roles_access_project_role_id_fkey" FOREIGN KEY ("project_role_id") REFERENCES "project_columns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_roles_access" ADD CONSTRAINT "project_roles_access_project_rolesId_fkey" FOREIGN KEY ("project_rolesId") REFERENCES "project_roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_members" ADD CONSTRAINT "project_members_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_members" ADD CONSTRAINT "project_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_members" ADD CONSTRAINT "project_members_project_role_id_fkey" FOREIGN KEY ("project_role_id") REFERENCES "project_roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_tasks" ADD CONSTRAINT "project_tasks_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_tasks" ADD CONSTRAINT "project_tasks_column_id_fkey" FOREIGN KEY ("column_id") REFERENCES "project_columns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_tasks" ADD CONSTRAINT "project_tasks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_comments" ADD CONSTRAINT "task_comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_comments" ADD CONSTRAINT "task_comments_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "project_tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
