// Step 12: Setting up Providers
// Now, let’s configure providers for Next.js authentication in our application.
// We’ll create a providers.tsx file to handle session management and context.
// src/app/providers.tsx
// We start with the 'use client' pragma for clarity, emphasizing the client-side nature of this code.
'use client'

// Importing necessary modules and components
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

// Defining Props interface for the Providers component
interface ProvidersProps {
    children: ReactNode,
}

// Our Providers component encapsulates the SessionProvider to manage user sessions
export default function Providers({ children }: ProvidersProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}