import { z } from "zod";

export const announcementSchema = z.object({
  brand: z.string().max(55).min(1, "Campo obrigatório"),
  description: z.string().max(255).min(1, "Campo obrigatório"),
  model: z.string().max(55).min(1, "Campo obrigatório"),
  year: z.string().max(4).min(1, "Campo obrigatório"),
  km: z.string().max(55).min(1, "Campo obrigatório"),
  fuel: z.string().max(55).min(1, "Campo obrigatório"),
  color: z.string().max(55).min(1, "Campo obrigatório"),
  higher_than_fipe: z.boolean().default(false),
  price: z.string().max(55).min(1, "Campo obrigatório"),
  // photos: z.array(z.string()).min(1, "Campo obrigatório"),
});







// export const houseSchema = yup.object().shape({
//   name: yup
//     .string()
//     .max(45, `Deve ter no máximo 45 letras`)
//     .required('Campo Obrigatório'),
//   city: yup.string().required('Campo Obrigatório'),
//   state: yup.string().required('Campo Obrigatório'),
//   photos: yup
//     .array()
//     .min(3, 'Adicione no minimo 3 fotos')
//     .of(yup.string())
//     .required('Campo Obrigatório'),
//   dailyPrice: yup
//     .number()
//     .typeError('Campo Obrigatório')
//     .positive('É preciso informar um valor positivo')
//     .required(),
//   singleBed: yup
//     .number()
//     .typeError('Campo Obrigatório')
//     .integer('É preciso informar um numero inteiro')
//     .required('Campo Obrigatório'),
//   doubleBed: yup
//     .number()
//     .typeError('Campo Obrigatório')
//     .integer('É preciso informar um numero inteiro')
//     .required('Campo Obrigatório'),
//   services: yup
//     .array()
//     .min(3, 'Selecione no minimo 3 opções')
//     .of(yup.string())
//     .required('Campo Obrigatório'),
//   houseDesc: yup
//     .string()
//     .min(200, 'Deve conter no minimo 200 caracteres')
//     .max(550, 'Deve conter no máximo 550 caracteres')
//     .required('Campo Obrigatório'),
// });
