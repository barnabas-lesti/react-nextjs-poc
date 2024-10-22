import { type Document, type WithId } from "mongodb";

export const mapDocumentsToObjects = <T>(items: WithId<Document>[]): T[] => {
  return items.map((document) => mapDocumentToObject(document));
};

export const mapDocumentToObject = <T>({ _id, ...document }: WithId<Document>): T => {
  return {
    id: _id.toString(),
    ...document,
  } as T;
};
