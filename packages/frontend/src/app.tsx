import React from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { relayEnvironment } from "./relay-environment";
import { Example, examplePageQueryRef } from "./components/example";

const { Suspense } = React;

export const App: React.FC = () => {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <Example queryRef={examplePageQueryRef} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};
