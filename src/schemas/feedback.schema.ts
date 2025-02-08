import { z } from "zod";

export const createFeedbackSchema = z.object({
  type: z.enum(["suggestion", "bug", "compliment"]),
  message: z.string().min(1, "Message is required"),
});

export const updateFeedbackSchema = z.object({
  status: z.enum(["pending", "resolved"]),
});

export const feedbackParamsSchema = z.object({
  id: z.string().uuid(),
});
