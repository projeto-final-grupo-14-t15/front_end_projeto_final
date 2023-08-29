import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().max(50).min(1, "Campo obrigatório"),
  email: z.string().max(155).min(1, "Campo obrigatório"),
  password: z.string().max(255).min(1, "Campo obrigatório"),
  cpf: z.string().max(15).min(1, "Campo obrigatório"),
  telephone: z.string().max(25).min(1, "Campo obrigatório"),
  isSeller: z.string().min(1, "Campo obrigatório"),
  dateOfBirth: z.string().min(1, "Campo obrigatório"),
  description: z.string().max(255).min(1, "Campo obrigatório"),
  cep: z.string().min(8, "Campo obrigatório").max(10),
  state: z.string().min(2, "Campo obrigatório").max(55),
  city: z.string().min(2, "Campo obrigatório").max(55),
  street: z.string().min(2, "Campo obrigatório").max(55),
  complement: z.string().min(2, "Campo obrigatório").max(55),
  number: z.string().min(1, "Campo obrigatório"),
});

export type RegisterData = z.infer<typeof registerSchema>;
