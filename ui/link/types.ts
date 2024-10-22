import { type LinkProps as MuiLinkProps } from "@mui/material";
import { type LinkProps as NextLinkProps } from "next/link";

export interface NextLinkWrapperProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<NextLinkProps, "href" | "as" | "passHref" | "onMouseEnter" | "onClick" | "onTouchStart"> {
  to: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"];
}

export type LinkProps = {
  activeClassName?: string;
  as?: NextLinkProps["as"];
  href: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"];
  noLinkStyle?: boolean;
} & Omit<NextLinkWrapperProps, "to" | "linkAs" | "href"> &
  Omit<MuiLinkProps, "href">;
