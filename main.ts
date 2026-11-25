// Entry for make.fun bounty u-0xb3e689-one-star-review-of-something-essential-c7234629:
// "One-Star Review of Something Essential" — one line, at most 160
// characters, written to /output/entry.txt. Deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star for gravity: works every single time, never takes a day off, and has dropped everything I own at least once.";

// The bounty gate accepts 1 to 160 characters; fail loudly rather than
// write an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-160`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log("wrote entry.txt");
