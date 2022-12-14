import type { GraphQLResponse } from "relay-runtime"

export async function fetchGraphQL(
  text: string,
  variables?: unknown
): Promise<GraphQLResponse> {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })

  return await response.json()
}
