import z from "zod";

export const resetPasswordSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
  newPassword: z
    .string({ required_error: "Password is required" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      "password must contain at least 1 upper case, 1 lower case, 1 number and special character"
    ),
});

export type ResetPasswordFields = z.infer<typeof resetPasswordSchema>;
