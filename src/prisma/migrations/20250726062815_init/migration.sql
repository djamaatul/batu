-- AlterTable
ALTER TABLE "users" ADD COLUMN     "address" TEXT,
ADD COLUMN     "photo" TEXT,
ALTER COLUMN "password" DROP NOT NULL;

-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role_access" (
    "id" TEXT NOT NULL,
    "access_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "role_access_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_columns" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_columns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_roles_access" (
    "id" TEXT NOT NULL,
    "access_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_roles_access_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_members" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_tasks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "column_id" TEXT NOT NULL,
    "description" TEXT,
    "due_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_comments" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "content" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "task_comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "role_access_access_code_key" ON "role_access"("access_code");

-- CreateIndex
CREATE UNIQUE INDEX "project_roles_access_access_code_key" ON "project_roles_access"("access_code");
