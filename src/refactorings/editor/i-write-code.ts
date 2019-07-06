import { Selection } from "./selection";

export { Write, ReadThenWrite };
export { Update, Code };

type Write = (code: Code) => Promise<void>;

type ReadThenWrite = (
  selection: Selection,
  getUpdates: (code: Code) => Update[]
) => Promise<void>;

interface Update {
  code: Code;
  selection: Selection;
}

type Code = string;
