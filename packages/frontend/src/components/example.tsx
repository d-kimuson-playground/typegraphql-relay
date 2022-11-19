import { graphql, usePreloadedQuery } from "react-relay";
import { loadQuery, PreloadedQuery } from "react-relay/hooks";
import type { example_ExampleQuery } from "./__generated__/example_ExampleQuery.graphql"
import { relayEnvironment } from "../relay-environment";

export const examplePageQuery = graphql`
  query example_ExampleQuery {
    tasks {
      id
      title
    }
  }
`;

export const examplePageQueryRef = loadQuery<example_ExampleQuery>(relayEnvironment, examplePageQuery, {})

export type ExampleProps = {
  queryRef: PreloadedQuery<example_ExampleQuery>;
};

export const Example: React.FC<ExampleProps> = ({ queryRef }) => {
  const data = usePreloadedQuery<example_ExampleQuery>(
    examplePageQuery,
    queryRef
  );

  return (
    <div className="Example">
      <header className="Example-header">
        <h2>tasks!</h2>
        <ul>
          {data.tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
};
