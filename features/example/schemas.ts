import { z } from "zod";

export const ExampleItemSchema = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string(),
});

export const ExampleItemsSchema = z.array(ExampleItemSchema);
