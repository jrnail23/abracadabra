import { hasIfElseToFlip, flipIfElse } from "./flip-if-else";

import { RefactoringWithActionProvider } from "../../types";

const config: RefactoringWithActionProvider = {
  commandKey: "abracadabra.flipIfElse",
  operation: flipIfElse,
  title: "Flip If/Else",
  actionProviderMessage: "Flip if/else",
  canPerformRefactoring: hasIfElseToFlip,
  isPreferred: true
};

export default config;
