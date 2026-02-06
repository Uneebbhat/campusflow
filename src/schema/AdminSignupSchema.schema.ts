import { z } from "zod"

const phoneNumberRegex = /^(?:\+92|0)3[0-9]{9}$/;


const AdminSignupSchema = z.object({
  adminName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(30, { message: "Name can't be more than 30 characters." })
    .regex(/^[a-zA-Z ]+$/, { message: "Name can only contain letters and spaces." }),
  adminEmail: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email is too long." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number can't be more than 15 digits." })
    .regex(/^(?:\+92|0)3[0-9]{9}$/, {
      message: "Enter a valid Pakistani mobile number",
    }),
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

export default AdminSignupSchema