import { graphql, usePreloadedQuery } from "react-relay";
import { loadQuery, PreloadedQuery } from "react-relay/hooks";
import type { example_ExamplePageQuery } from "./__generated__/example_ExamplePageQuery.graphql"
import { relayEnvironment } from "../relay-environment";
import { Nav } from "~/features/common/components/nav";

export const examplePageQuery = graphql`
  query example_ExamplePageQuery {
    tasks {
      id
      title
    }
  }
`;

export const examplePageQueryRef = loadQuery<example_ExamplePageQuery>(relayEnvironment, examplePageQuery, {})

export type ExamplePageProps = {
  queryRef: PreloadedQuery<example_ExamplePageQuery>;
};

export const ExamplePage: React.FC<ExamplePageProps> = ({ queryRef }) => {
  const data = usePreloadedQuery<example_ExamplePageQuery>(
    examplePageQuery,
    queryRef
  );

  return (
    <div className="Example">
      <header className="Example-header">
        <h2>tasks!</h2>
        <Nav />
        <ul>
          {data.tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
};
