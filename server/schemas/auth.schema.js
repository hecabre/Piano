import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "El nombre es requerido",
  }),
  second_name: z.string({
    required_error: "El apellido es requerido",
  }),
  age: z.number({
    required_error: "El nombre es requerido",
  }),
  email: z
    .string({ required_error: "El email es requerido" })
    .email({ message: "Correo invalido`" }),
  password: z.string({ required_error: "La contraseña es requerida" }).min(6, {
    message: "La contraseña debe de ser de al menos 6 caracteres",
  }),
});

export const loginSchema = z.object({
  email: z.string({ required_error: "El email es requerido" }),
  password: z
    .string({ required_error: "La contraseña es requerida" })
    .min(6, { message: "La contraseña debe de ser de al menos 6 caracteres" }),
});
