import type React from "react"
import { Link as RouterLink } from "react-router-dom"
import { resolveLink, RouteConf } from "../../../router"

export const Link = <
  T extends keyof RouteConf,
  Props = React.PropsWithChildren<
    {
      path: T
    } & Omit<RouteConf[T], "path">
  >
>(
  props: Props
): JSX.Element | null => {
  const { path, params, children } = props as React.PropsWithChildren<{
    path: string
    params: { [K: string]: string } | undefined
  }>
  const resolvedPath = resolveLink(path, params)
  return <RouterLink to={resolvedPath}>{children}</RouterLink>
}
