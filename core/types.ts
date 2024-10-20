export type NextLayoutProps = React.PropsWithChildren<{}>;

export interface NextPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
