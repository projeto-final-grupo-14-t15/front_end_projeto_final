import { z } from "zod";


export const photosSchema = z.array(z.object({
  link: z.string().min(1, "Campo obrigatório")
}));

export const announcementSchema = z.object({
  brand: z.string().max(55).min(1, "Campo obrigatório"),
  description: z.string().max(255).min(1, "Campo obrigatório"),
  model: z.string().max(55).min(1, "Campo obrigatório"),
  year: z.string().max(4).min(1, "Campo obrigatório"),
  km: z.string().max(55).min(1, "Campo obrigatório"),
  fuel: z.string().max(55).min(1, "Campo obrigatório"),
  color: z.string().max(55).min(1, "Campo obrigatório"),
  higherThanFipe: z.boolean().default(false),
  price: z.string().max(55).min(1, "Campo obrigatório"),
  photos: photosSchema,
});
