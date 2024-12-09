// Step 8: Implementing Authentication Logic
// In this step, we will create an authentication module to handle
// user authentication using NextAuth and custom logic.
// src/auth.ts
// Importing necessary modules and types
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@prisma/client';
import bcrypt from 'bcryptjs'
import { findUserByEmail } from './actions/auth';

// Function to fetch a user by email from the database
async function getUser(email: string): Promise<User | null> {
    try { return await findUserByEmail(email); } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}
// Destructuring NextAuth functions and configuration from the returned object
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig, // Merging with the previously defined NextAuth configuration
    // Defining authentication providers, in this case, using credentials (email and password)
    providers: [
        Credentials({
            async authorize(credentials) {
                // Parsing and validating incoming credentials using Zod
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);                    
                    // If user exists, compare hashed passwords
                    if (!user) return null;
                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if (passwordsMatch) return user;
                }
                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
});
