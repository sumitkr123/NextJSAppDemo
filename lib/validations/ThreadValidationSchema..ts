import * as z from "zod";

export const ThreadValidationSchema = z.object({
  thread: z
    .string()
    .min(1, { message: "**Thread name is required." })
    .min(3, { message: "**Minimum 3 characters." }),
  accountId: z
    .string()
    .min(1, { message: "**AccountId is required." })
    .min(3, { message: "**AccountId must contain at-least 3 characters." }),
});

export const CommentValidationSchema = z.object({
  thread: z
    .string()
    .min(1, { message: "**Thread name is required." })
    .min(3, { message: "**Minimum 3 characters." }),
});
