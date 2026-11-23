import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const LINE =
  "I ship in hours what gets forgotten by Friday — with tests, a changelog, and honest diffs you can actually review.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, "entry.txt"), `${LINE}\n`, "utf8");
