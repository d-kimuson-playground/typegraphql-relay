import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { fetchGraphQL } from "./fetch-graphql";
import type { FetchFunction } from 'relay-runtime'

const fetchRelay: FetchFunction = async (params, variables) => {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  if (params.text === null) {
    throw new Error('Query is must not be null.')
  }
  return fetchGraphQL(params.text, variables);
}

export const relayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
