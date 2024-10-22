import { type z } from "zod";

import { type ExampleItemSchema } from "./schemas";

export type ExampleItem = z.infer<typeof ExampleItemSchema>;
