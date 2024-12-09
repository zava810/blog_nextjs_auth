// Step 15: Crafting the Sign-Up Button Component
// Let’s examine the signup-button.tsx file where we construct a simple Sign-Up
// Button component. This button is not just a visual element;
// it dynamically adjusts its appearance based on the sign-up process status.
// src/components/signup/signup-button.tsx
// Ensuring client-side code
'use client';

// Importing the useFormStatus hook
import { useFormStatus } from "react-dom";

// Sign-Up Button Component
export default function SignupButton() {
    // Using useFormStatus hook to track the status of the form
    const { pending } = useFormStatus();

    // Rendering the Sign-Up button with dynamic styling
    return (
        // The disabled attribute is dynamically set based on the pending state, preventing multiple form submissions.
        <button className="bg-gray-200 py-2 rounded w-full disabled:bg-slate-50 disabled:text-slate-500" disabled={pending ? true : false}>
            {/* Displaying "Sign Up" or "Sign Up ..." based on the form status */}
            Sign Up {pending ? '...' : ''}
        </button>
    );
}