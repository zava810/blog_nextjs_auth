// Step 25: Login Page Initialization
// This file initializes the login page by rendering the login form component.
// src/app/login/page.tsx
// Importing the login form component
import Form from "@/components/login/form";

// Defining the asynchronous function for login page initialization
export default async function LoginPage() {
  return (
    // Rendering the login form component
    <Form />
  );
}