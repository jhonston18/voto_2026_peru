import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const prismaClientSingleton = () => {
  // Creamos la conexión base con 'pg'
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  
  // Creamos el adaptador que Prisma 7 necesita
  const adapter = new PrismaPg(pool)
  
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL no está definida en las variables de entorno.");
  }
  // Pasamos el adaptador al constructor. 
  // Esto llena las "options" que el error decía que estaban vacías.
  return new PrismaClient({ adapter })
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
