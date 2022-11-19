import React from "react"
import { RelayEnvironmentProvider } from "react-relay/hooks"
import { relayEnvironment } from "./relay-environment"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"

const { Suspense } = React

export const App: React.FC = () => {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <RouterProvider router={router} />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}
