import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$connect().catch(() => process.exit(1));

export default prisma;
