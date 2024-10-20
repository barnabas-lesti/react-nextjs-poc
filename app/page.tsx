import { type NextPageProps } from "#core/types";

export default (props: NextPageProps) => {
  console.debug("app/page:props", props);
  return (
    <>
      <h1>Root</h1>
    </>
  );
};
