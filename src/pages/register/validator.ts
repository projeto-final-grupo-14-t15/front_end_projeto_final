import { z } from "zod";


export const registerSchema = z.object({
    name: z.string().max(50),
    email: z.string().max(155),
    password: z.string().max(255),
    cpf: z.string().max(15),
    telephone: z.string().max(25),
    AccountType: z.string().default("Comprador"), 
    date_of_birth: z.string(), 
    description: z.string().max(255),
    cep: z.string().max(9),
    state: z.string().max(55),
    city: z.string().max(55),
    street: z.string().max(55),
    number: z.number().nullish(),
    complement: z.string().max(55),
})

export type RegisterData = z.infer<typeof registerSchema>