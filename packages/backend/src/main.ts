import { ApolloServer } from "apollo-server";
import { schema } from "./typegraphql/schema";

import "reflect-metadata";
import { PrismaClient } from "@prisma/client";

const PORT = process.env["PORT"] || 4000;

export type Context = {
  prisma: PrismaClient;
};

const bootstrap = async (): Promise<void> => {
  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema: await schema(),
    context: (): Context => ({
      prisma,
    }),
  });

  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
};

bootstrap().catch((err) => {
  console.error(err);
});
