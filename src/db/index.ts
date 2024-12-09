// Step 16: Establishing Database Connection with Prisma
// Dig into the index.ts file in the db directory, where we will
// create a database connection using Prisma and we will use a singleton
// pattern for efficient database access.
// src/db/index.ts

// Importing the PrismaClient from @prisma/client
import { PrismaClient } from '@prisma/client';

// Defining a function to create a singleton instance of PrismaClient
const prismaClientSingleton = () => {
    return new PrismaClient();
};

// Extending the global namespace to include the PrismaClient instance
declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

// Creating a global instance of PrismaClient or using the existing one
export const db = globalThis.prisma ?? prismaClientSingleton();

// Setting the global Prisma instance if not in production
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
