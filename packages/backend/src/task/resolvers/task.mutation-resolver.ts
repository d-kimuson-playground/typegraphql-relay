import { Args, Ctx, Mutation, Resolver } from "type-graphql"
import type { Context } from "~/main"
import { Task } from "@generated/type-graphql/models/Task"
import { CreateOneTaskArgs } from "@generated/type-graphql/resolvers/crud/args.index"
import type { MutationResolvers } from "~/typegraphql/resolvers"

@Resolver(() => Task)
export class TaskMutationResolver {
  @Mutation(() => Task, { nullable: false })
  async createTask(
    @Ctx() { prisma }: Context,
    @Args() { data }: CreateOneTaskArgs
  ): Promise<Task> {
    const created = await prisma.task.create({
      data: {
        title: data.title,
        detail: data.detail,
      },
    })

    return created
  }
}

export const TaskMutationResolvers: MutationResolvers = [TaskMutationResolver]
