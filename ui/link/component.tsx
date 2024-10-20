import Link from "next/link";

import { type UiLinkComponentProps } from "./types";

export const UiLinkComponent = (props: UiLinkComponentProps) => {
  return <Link href={props.href}>{props.children}</Link>;
};
