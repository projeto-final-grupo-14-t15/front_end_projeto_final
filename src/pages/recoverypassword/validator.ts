import { z } from "zod";

export const recoveryPasswordSchema = z
  .object({
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "Senha deve ter no minimo 8 caracteres"),
    confirmPassword: z.string().nonempty("Senha é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não correspondem",
    path: ["confirmPassword"],
  });

export type RecoveryPasswordData = z.infer<typeof recoveryPasswordSchema>;

export const verifyEmailSchema = z.object({
  email: z.string(),
});

export type VerifyEmailData = z.infer<typeof verifyEmailSchema>;

export const verifyCodeSchema = z.object({
  code: z.string(),
});

export type verifyCodeData = z.infer<typeof verifyCodeSchema>;
