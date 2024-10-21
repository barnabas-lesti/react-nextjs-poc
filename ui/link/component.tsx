import Link from "next/link";

import { type LinkComponentProps } from "./types";

export const LinkComponent = (props: LinkComponentProps) => {
  return <Link href={props.href}>{props.children}</Link>;
};
