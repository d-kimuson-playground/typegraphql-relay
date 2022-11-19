/**
 * @generated SignedSource<<716a52fde56f74118d95cd2a898da95e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type example_ExamplePageQuery$variables = {};
export type example_ExamplePageQuery$data = {
  readonly tasks: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
  }>;
};
export type example_ExamplePageQuery = {
  response: example_ExamplePageQuery$data;
  variables: example_ExamplePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "tasks",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "example_ExamplePageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "example_ExamplePageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "aa2f00612b89d4042a4241b49d910d2b",
    "id": null,
    "metadata": {},
    "name": "example_ExamplePageQuery",
    "operationKind": "query",
    "text": "query example_ExamplePageQuery {\n  tasks {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "fca1b62776dd1b630d2151ad6297a94d";

export default node;
