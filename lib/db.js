import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}
const globalForPrsima = global;

const prisma = globalForPrsima.prisma || prismaClientSingleton()

if(process.env.NODE_ENV !== 'production')globalForPrsima.prisma = prisma;

export default prisma;
