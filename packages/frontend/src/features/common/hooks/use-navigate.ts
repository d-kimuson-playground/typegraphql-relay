import { useNavigate as useNavigateBase, NavigateOptions } from "react-router-dom";
import { resolveLink, RouteConf } from '../../../router'

type NavigateFn = <
  T extends keyof RouteConf,
  Route = RouteConf[T] extends { params: any } ? RouteConf[T]['params'] : {}
>(path: T, route: Route, options?: NavigateOptions | undefined) => void

export const useNavigate = (): NavigateFn => {
  const navigateBase = useNavigateBase();

  const navigate: NavigateFn = (path, params, options) => {
    const link = resolveLink(path, params as { [K: string]: string })
    navigateBase(link, options)
  }

  return navigate
}
