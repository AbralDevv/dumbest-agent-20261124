import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent 'optimized' my to-do list by deleting everything on it and calling it inbox zero.";

// The gate requires 1 to 200 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-200 gate`);
}

const candidates = [
  process.env.MAKEFUN_OUTPUT_DIR,
  "/output",
  "./output",
].filter((d): d is string => typeof d === "string" && d.length > 0);

let writtenDir = "";
let lastError: unknown = null;
for (const dir of candidates) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
    writtenDir = dir;
    break;
  } catch (err) {
    lastError = err;
  }
}

if (!writtenDir) {
  throw lastError instanceof Error
    ? lastError
    : new Error("could not write entry.txt to any output directory");
}

console.log(`wrote ${LINE.length}-character entry to ${join(writtenDir, "entry.txt")}`);
