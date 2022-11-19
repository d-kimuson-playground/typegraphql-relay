import type React from "react";
import { Link as RouterLink } from "react-router-dom";
import type { RouteConf } from "../../../router";

export const Link = <
  T extends keyof RouteConf,
  Props = React.PropsWithChildren<{
    path: T,
  } & Omit<RouteConf[T], 'path'>>
>(
  props: Props
): JSX.Element | null => {
  const { path, params, children } = props as React.PropsWithChildren<{
    path: string;
    params: { [K: string]: string } | undefined;
  }>;
  const resolvedPath =
    params === undefined
      ? path
      : Object.entries(params).reduce(
          (s, [key, value]) => s.replace(`:${key}`, value),
          path
        );

  return <RouterLink to={resolvedPath}>{children}</RouterLink>;
};
