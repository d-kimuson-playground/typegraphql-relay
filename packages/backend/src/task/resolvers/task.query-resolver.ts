import { FindFirstTaskResolver } from '@generated/type-graphql'
import { FindManyTaskResolver } from '@generated/type-graphql'
import { FindUniqueTaskResolver } from '@generated/type-graphql'
import { GroupByTaskResolver } from '@generated/type-graphql'
import { AggregateTaskResolver } from '@generated/type-graphql'
import type { QueryResolvers } from '~/typegraphql/resolvers'

export const taskQueryResolvers: QueryResolvers = [
  FindFirstTaskResolver,
  FindManyTaskResolver,
  FindUniqueTaskResolver,
  GroupByTaskResolver,
  AggregateTaskResolver,
]
