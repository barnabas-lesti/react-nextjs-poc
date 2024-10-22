import { type NextRequest } from "next/server";

export type NextLayoutProps = React.PropsWithChildren<{}>;

export interface NextPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export type NextRouteFunction = (
  request: NextRequest,
  context: {
    params: Promise<{ [key: string]: string }>;
  },
) => Response | Promise<Response>;
