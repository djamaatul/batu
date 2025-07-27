import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$connect().catch(() => {
  console.log("CONNECTION FAILED");
});

export default prisma;
