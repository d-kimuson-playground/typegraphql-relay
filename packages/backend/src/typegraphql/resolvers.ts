import type { NonEmptyArray } from "type-graphql"
import type { Prisma } from "@prisma/client"

export type MutationResolvers = NonEmptyArray<Function>
export type QueryResolvers = NonEmptyArray<Function>

export const resolvers = (
  queryResolvers: QueryResolvers[],
  mutationResolvers: MutationResolvers[]
): NonEmptyArray<Function> => {
  return [
    ...queryResolvers.flat(),
    ...mutationResolvers.flat(),
  ] as NonEmptyArray<Function>
}

const queryResolverNames = <ModelName extends Prisma.ModelName>(
  modelName: ModelName
) => [
  `FindFirst${modelName}Resolver`,
  `FindMany${modelName}Resolver`,
  `FindUnique${modelName}Resolver`,
  `GroupBy${modelName}Resolver`,
  `Aggregate${modelName}Resolver`,
]

/**
 * @desc
 * - table 名を引数に自動生成された QueryResolver を読み込む
 * - bundle すると動的パス壊れるかな...
 */
export const loadGeneratedQueryResolvers = async (
  modelNames: Prisma.ModelName[]
) => {
  const resolvers = await Promise.all(
    modelNames.flatMap((modelName) =>
      queryResolverNames(modelName).map(
        (resolverName): Promise<Function> =>
          import(`@generated/type-graphql/resolvers/crud/Task/${resolverName}`)
            .then((mod) => mod[resolverName])
            .catch(() => undefined)
      )
    )
  )

  console.log("resolvers are loaded: ", resolvers)

  if (resolvers.length === 0) {
    throw new Error("Empty")
  }

  return resolvers as NonEmptyArray<Function>
}
