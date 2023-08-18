import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().max(50),
  email: z.string().max(155),
  password: z.string().max(255),
  cpf: z.string().max(15),
  telephone: z.string().max(25),
  isAdmin: z.string(),
  dateOfBirth: z.string(),
  description: z.string().max(255),
});

export type RegisterData = z.infer<typeof registerSchema>;
