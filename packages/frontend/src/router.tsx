import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from './pages/home.page';
import { ExamplePage, examplePageQueryRef } from './pages/example.page'
import type { RouteObject } from 'react-router-dom'
import type { ReadonlyDeep } from 'type-fest'
import { Nav } from "./features/common/components/nav";

type RoutesDef = ReadonlyArray<ReadonlyDeep<RouteObject>>

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/example',
    element: <ExamplePage queryRef={examplePageQueryRef} />,
  },
  {
    path: '/nests',
    element: <div>
      <h2>Nests route</h2>
      <Nav />
    </div>,
    children: [
      {
        path: ':nestId',
        element: <div>
          <h2>nests 20</h2>
          <Nav />
          </div>,
      }
    ]
  }
] as const satisfies RoutesDef;

export type RouteConf = RouteConfig<typeof routes>
export const router = createBrowserRouter(routes as unknown as RouteObject[])
export const resolveLink = (
  path: string,
  params?: { [K: string]: string }
): string => {
  return params === undefined
      ? path
      : Object.entries(params).reduce(
          (s, [key, value]) => s.replace(`:${key}`, value),
          path
        );
}

type RouteConfig<T extends RoutesDef, U = ToRouteUnion<T>> = AsObjectShape<U extends { path: string } ? U : { path: string }>
type ToRouteUnion<T extends RoutesDef> = T extends ReadonlyArray<infer I> ? MergeChild<I> : never
type AsObjectShape<T extends { path: string }> = {
  [K in T['path']]: {
    path: K,
  } & (
    ParsePathParams<K> extends infer Params
      ? keyof Params extends never
        ? {}
        : {
          params: Params
        }
      : never
  )
}
type MergeChild<T> = T extends { path: string, children: ReadonlyArray<infer Children extends { path: string }> } ? (
  (
    T extends { element: JSX.Element } ? T : never
  ) | MergeChild<{
    path: `${T['path']}/${Children['path']}`,
  } & (Children extends { children: any } ? { children: Children['children'] } : {})>
) : T
type ParsePathParams<T extends string> = [T] extends [`${string}:${infer I1}`] ? (
  I1 extends `${infer Param}/${infer I2}` ? Required<{ [K in Param]: string } & ParsePathParams<I2>> : { [K in I1]: string }
) : {}
