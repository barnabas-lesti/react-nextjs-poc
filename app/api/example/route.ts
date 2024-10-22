import { getUserAsync } from "#core/auth/data";
import { db } from "#core/db/client";
import { type NextRouteFunction } from "#core/types";

export const dynamic = "force-dynamic";

export const GET: NextRouteFunction = async () => {
  try {
    const user = await getUserAsync();
    const exampleItems = await db().collection("example").find({ userId: user?.id }).toArray();

    return Response.json({
      userFullName: user?.id,
      exampleItems,
    });
  } catch (e) {
    console.error(e);
    return Response.error();
  }
};
