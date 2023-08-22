import { z } from "zod";

export const userUpdateSchema = z.object({
   name: z.string().max(55).nullish(),
   email:z.string().email("Digite um Email valido").nullish(),
   cpf: z.string().nullish(),
   telephone: z.string().nullish(),
   dateOfBirth:z.string().nullish(),
   description:z.string().nullish()
}).optional();

