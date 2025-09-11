import { z } from "zod";

export const SignupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .regex(/^\d+$/, "Phone must contain only numbers"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  address: z.object({
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zip: z.string().min(4, "ZIP code is required"),
    country: z.string().min(1, "Country is required"),
  }),
});

export type SignupFormData = z.infer<typeof SignupSchema>;
