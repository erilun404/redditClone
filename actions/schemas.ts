import { z } from "zod";

export const logInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const postSchema = z.object({
  title: z.string().min(3, "title must be at least 2 characters"),
  content: z.string().optional(),
  //slug: z.string().
  // image: z.instanceof(FormData),
});
