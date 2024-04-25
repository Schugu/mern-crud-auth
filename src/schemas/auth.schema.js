// Improtar el objeto z de zod.
import { z } from 'zod'

// Requisitos que deben tener los datos para que sean validos
export const registerSchema = z.object({
  username:
    z
      .string({ required_error: 'Username is requiere' }),
  email:
    z
      .string({ required_error: 'Email is requiere' })
      .email({ required_error: 'Invalid email' }),
  password:
    z
      .string({ required_error: 'Password is requiere' })
      .min(6, { required_error: 'Password must be at laeast 6 characters' }),
});

export const loginSchema = z.object({
  email:
    z
      .string({ required_error: 'Email is requiere' })
      .email({ required_error: 'Invalid email' }),
  password:
    z
      .string({ required_error: 'Password is requiere' })
      .min(6, { required_error: 'Password must be at laeast 6 characters' }),
});