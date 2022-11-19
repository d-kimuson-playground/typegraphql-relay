/**
 * @generated SignedSource<<763431dc55af272b939cee12577f83b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type example_ExampleQuery$variables = {};
export type example_ExampleQuery$data = {
  readonly tasks: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
  }>;
};
export type example_ExampleQuery = {
  response: example_ExampleQuery$data;
  variables: example_ExampleQuery$variables;
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
    "name": "example_ExampleQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "example_ExampleQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "65e929aa1aa7ecadb212ac2618152f92",
    "id": null,
    "metadata": {},
    "name": "example_ExampleQuery",
    "operationKind": "query",
    "text": "query example_ExampleQuery {\n  tasks {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "010690f3c878315dfcbc2338d35bebb0";

export default node;
