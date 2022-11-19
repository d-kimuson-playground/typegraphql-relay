import "reflect-metadata"

import type { GraphQLSchema } from "graphql"
import { buildSchema } from "type-graphql"
import { TaskMutationResolvers } from "../task/resolvers/task.mutation-resolver"
import { resolvers } from "./resolvers"
import { taskQueryResolvers } from "~/task/resolvers/task.query-resolver"

export const schema = async (): Promise<GraphQLSchema> => {
  return await buildSchema({
    resolvers: resolvers([taskQueryResolvers], [TaskMutationResolvers]),
    validate: true,
    emitSchemaFile: true,
  })
}
