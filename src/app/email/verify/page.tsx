// Step 23: Email Verification Page Setup
// In this step, we will create a page that displays after the user clicks on
// the email verification link. Later, we will implement the logic
// in a separate component.
// src/app/email/verify/page.tsx
// Import the VerifyEmail component from the specified path
import VerifyEmail from "@/components/email/verify/verify-email";

// Import the Suspense component from React
import { Suspense } from "react";

// Define the Verify function component
export default function Verify() {
  return (
    // Wrap the VerifyEmail component in a Suspense component.
    // The Suspense component is used to handle asynchronous data loading in React applications.
    // When a component needs to fetch data from an external source (e.g., an API call), 
    // it can be wrapped in Suspense
    <Suspense>
      <div className='flex flex-col'>
        {/* Render the VerifyEmail component */}
        <VerifyEmail />
      </div>
    </Suspense>
  )
}