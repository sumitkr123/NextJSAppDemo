import * as z from "zod";

export const UserValidationSchema = z.object({
  profile_photo: z.string().url().min(1, "**Profile-picture is required."),
  name: z
    .string()
    .min(1, "**Name is required.")
    .min(3, "**Name must contain at-least 3 characters.")
    .max(30),
  username: z
    .string()
    .min(1, "**Username is required.")
    .min(3, "**Username must contain at-least 3 characters.")
    .max(30),
  bio: z
    .string()
    .min(1, "**Bio is required.")
    .min(3, "**Bio must contain at-least 3 characters.")
    .max(1000),
});
