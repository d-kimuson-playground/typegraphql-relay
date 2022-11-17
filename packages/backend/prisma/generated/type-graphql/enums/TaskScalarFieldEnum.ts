import * as TypeGraphQL from "type-graphql";

export enum TaskScalarFieldEnum {
  id = "id",
  title = "title",
  detail = "detail",
  isCompleted = "isCompleted",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(TaskScalarFieldEnum, {
  name: "TaskScalarFieldEnum",
  description: undefined,
});
