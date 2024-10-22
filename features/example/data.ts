import { getUserId } from "#core/auth/data";
import { db } from "#core/db/client";
import { mapDocumentsToObjects } from "#core/db/functions";

import { EXAMPLES_COLLECTION_NAME } from "./config";
import { ExampleItemsSchema } from "./schemas";
import { type ExampleItem } from "./types";

export const getExampleItemsAsync = async (): Promise<ExampleItem[]> => {
  const userId = getUserId();
  if (!userId) throw new Error("User needs to be logged in to access this resource");

  const exampleItems = mapDocumentsToObjects<ExampleItem>(
    await db().collection(EXAMPLES_COLLECTION_NAME).find({ userId }).toArray(),
  );

  const { success, error } = ExampleItemsSchema.safeParse(exampleItems);
  if (!success) console.warn("Possible malformed data from database:", error);

  return exampleItems;
};
