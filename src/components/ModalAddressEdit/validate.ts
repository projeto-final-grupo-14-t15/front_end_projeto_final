import { z } from "zod";

export const addressUpdateSchema = z
  .object({
    cep: z.string().min(8).max(10),
    state: z.string().max(55),
    city: z.string().max(55),
    street: z.string().max(55),
    complement: z.string().max(55),
    number: z.string(),
  })
  .optional();

export type AddressData = z.infer<typeof addressUpdateSchema>;
