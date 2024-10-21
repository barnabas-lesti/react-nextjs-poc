"use client";

// https://github.com/mui/material-ui/blob/7e2bcaa87ef69165b1050e535dd1189d9f560f45/examples/material-ui-nextjs-pages-router-ts/src/Link.tsx

import MuiLink from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { type LinkProps, type NextLinkWrapperProps } from "./types";

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled("a")({});

export const NextLinkWrapper = React.forwardRef<HTMLAnchorElement, NextLinkWrapperProps>(
  function NextLinkWrapper(props, ref) {
    const { to, linkAs, replace, scroll, shallow, prefetch, legacyBehavior = true, locale, ...other } = props;

    return (
      <NextLink
        href={to}
        prefetch={prefetch}
        as={linkAs}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref
        locale={locale}
        legacyBehavior={legacyBehavior}
      >
        <Anchor
          ref={ref}
          {...other}
        />
      </NextLink>
    );
  },
);

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/pages/api-reference/components/link
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
  const {
    activeClassName = "active",
    as,
    className: classNameProps,
    href,
    legacyBehavior,
    linkAs: linkAsProp,
    locale,
    noLinkStyle,
    prefetch,
    replace,
    // eslint-disable-next-line unused-imports/no-unused-vars
    role,
    scroll,
    shallow,
    ...other
  } = props;

  const pathname = usePathname();
  const pathnameProp = typeof href === "string" ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: pathname === pathnameProp && activeClassName,
  });

  const linkAs = linkAsProp || as;
  const nextJsProps = {
    to: href,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    legacyBehavior,
    locale,
  };

  if (noLinkStyle) {
    return (
      <NextLinkWrapper
        className={className}
        ref={ref}
        {...nextJsProps}
        {...other}
      />
    );
  }

  return (
    <MuiLink
      component={NextLinkWrapper}
      className={className}
      ref={ref}
      {...nextJsProps}
      {...other}
    />
  );
});
