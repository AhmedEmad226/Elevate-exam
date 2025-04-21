import z from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "you forgot to type your Email" })
    .email("this email is invalid"),
  password: z
    .string({ required_error: "you forgot to type your Password" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      "password must contain at least 1 upper case, 1 lower case, 1 number and special character"
    ),
});


export type LoginFeilds = z.infer<typeof loginSchema>;
