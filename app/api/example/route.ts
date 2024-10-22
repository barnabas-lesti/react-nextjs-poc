import { type NextRouteFunction } from "#core/types";
import { getExampleItemsAsync } from "#features/example/data";

export const dynamic = "force-dynamic";

export const GET: NextRouteFunction = async () => {
  try {
    const exampleItems = await getExampleItemsAsync();
    return Response.json({ exampleItems });
  } catch (e) {
    console.error(e);
    return Response.error();
  }
};
