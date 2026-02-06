import { z } from "zod"

const AdminLoginSchema = z.object({
  adminEmail: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email is too long." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(50, { message: "Password can't be more than 50 characters." })
    .refine(
      (val) =>
        /[A-Z]/.test(val) &&
        /[a-z]/.test(val) &&
        /\d/.test(val) &&
        /[!@#$%^&*()\-_=+{};:,<.>]/.test(val),
      {
        message:
          "Password must include uppercase, lowercase, number, and special character."
      }
    ),
})

export default AdminLoginSchema