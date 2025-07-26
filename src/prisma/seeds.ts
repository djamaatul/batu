import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const role = await prisma.roles.create({
    data: {
      name: "Admin",
    },
  });

  await prisma.role_access.create({
    data: {
      role_id: role.id,
      access_code: "MANAGE_PROJECT",
    },
  });

  await prisma.role_access.create({
    data: {
      role_id: role.id,
      access_code: "VIEW_REPORTS",
    },
  });

  const user = await prisma.users.create({
    data: {
      name: "Dika Anbiya",
      email: "dika@example.com",
      password: hashedPassword,
      address: "Jakarta",
    },
  });

  await prisma.user_roles.create({
    data: {
      user_id: user.id,
      role_id: role.id,
    },
  });

  const project = await prisma.projects.create({
    data: {
      name: "Project Kalender",
      created_by: user.id,
    },
  });

  const column = await prisma.project_columns.create({
    data: {
      name: "To Do",
      project_id: project.id,
      created_by: user.id,
    },
  });

  const projectRole = await prisma.project_roles.create({
    data: {
      name: "Developer",
    },
  });

  await prisma.project_roles_access.create({
    data: {
      access_code: "EDIT_TASK",
      project_roles_id: projectRole.id,
    },
  });

  await prisma.project_members.create({
    data: {
      user_id: user.id,
      project_id: project.id,
      project_role_id: projectRole.id,
    },
  });

  const task = await prisma.project_tasks.create({
    data: {
      title: "Buat Halaman Login",
      user_id: user.id,
      project_id: project.id,
      column_id: column.id,
      description: "Halaman login dengan Tailwind dan JWT",
      due_date: new Date(Date.now() + 3 * 86400000),
      update_at: new Date(),
    },
  });

  await prisma.task_comments.create({
    data: {
      user_id: user.id,
      task_id: task.id,
      content: "Tolong tambahkan validasi email.",
      update_at: new Date(),
    },
  });
}

main()
  .catch(() => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
