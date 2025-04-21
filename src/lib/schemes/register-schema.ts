import z from "zod";

export const registerSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .min(1, "Username is required"),
  firstName: z
    .string({ required_error: "First name is required" })
    .min(1, "First name is required"),
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(1, "Last name is required"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Email is invalid")
    .min(1, "Email is required"),
  password: z
    .string({ required_error: "Password is required" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,16}$/
    )
    .min(1, "Password is required"),
    rePassword: z
    .string({ required_error: "Confirm password is required" })
    .min(1, "RePassword is required"),
  phone: z
    .string({ required_error: "Phone is required" })
    .regex(/^(011|012|015)\d{8}$/)
    .min(1, "Phone is required")
    .max(11),
}).refine((data) => data.password === data.rePassword, {
  message: "Passwords are not matched",
  path: ["rePassword"],
});

export type RegisterFeilds = z.infer<typeof registerSchema>;
