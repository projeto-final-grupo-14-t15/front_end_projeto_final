import { z } from "zod";

export const userUpdateSchema = z
  .object({
    name: z.string().max(50).min(1, "Nome Obrigatorio"),
    email: z
      .string()
      .max(155)
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Digite um email valido"
      ), // ex: maria@gmail.com
    cpf: z
      .string()
      .max(15)
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Digite um CPF valido"), // ex: 123.456.789-00
    telephone: z
      .string()
      .max(25)
      .regex(/\d{4,5}-\d{4}$/, "Digite um celular valido"), // ex: 99999-9999
    dateOfBirth: z
      .string()
      .regex(/^\d{2}\/\d{2}\/\d{4}/, "Digite uma data valida"), // ex: 01/01/1990
    description: z.string().max(255).nullish(),
  })
  .optional();
