import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TaskScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TaskScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TaskScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TaskScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TaskScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TaskScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  detail?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isCompleted?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
