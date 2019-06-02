import { parse } from "@babel/parser";
import traverse, { TraverseOptions } from "@babel/traverse";
import * as t from "@babel/types";

import { Code } from "./i-write-updates";

export { NodePath } from "@babel/traverse";
export { traverseAST, isStringLiteral, isNumericLiteral };
export { Selection, Position };

interface Selection {
  start: Position;
  end: Position;
}

interface Position {
  line: number;
  column: number;
}

function traverseAST(code: Code, opts: TraverseOptions): void {
  const ast = parse(code, {
    // Parse in strict mode and allow module declarations
    sourceType: "module",

    plugins: [
      "classProperties",
      "classPrivateProperties",
      "classPrivateMethods",
      "jsx",
      "typescript"
    ]
  });

  traverse(ast, opts);
}

function isStringLiteral(
  node: object | null | undefined,
  opts?: object | null
): node is StringLiteral {
  return t.isStringLiteral(node, opts);
}

interface StringLiteral extends t.StringLiteral {
  extra: Extra;
}

function isNumericLiteral(
  node: object | null | undefined,
  opts?: object | null
): node is NumericLiteral {
  return t.isNumericLiteral(node, opts);
}

interface NumericLiteral extends t.NumericLiteral {
  extra: Extra;
}

interface Extra {
  raw: string;
  rawValue: string;
}