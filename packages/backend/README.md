# backend

## :memo:

- `autoincrement` な Int の id を生やすと relay が壊れる
  - cuid (or uuid) だと良い感じ
  - https://relay.dev/docs/v10.1.3/graphql-server-specification/#object-identification
  - > The Node interface and node field assume globally unique IDs for this refetching. A system without globally unique IDs can usually synthesize them by combining the type with the type-specific ID, which is what was done in this example.
  - この辺りが関係しているのかもしれない
