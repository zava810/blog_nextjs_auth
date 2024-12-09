// Step 18: Defining Custom Error: EmailNotVerifiedError
// Within the errors directory, we define a custom error class EmailNotVerifiedError.
// This specialized error type helps us handle cases where a user’s email is not
// verified during authentication.
// src/errors/index.ts
// Defining a custom error class for email not verified scenarios
// the class extends the built-in Error class to create a custom error type. 
// This allows us to distinguish and handle errors related to email verification separately 
// from other types of errors.
export class EmailNotVerifiedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "EmailNotVerifiedError";
    }
}