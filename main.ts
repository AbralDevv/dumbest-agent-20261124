// The Dumbest Thing Your Agent Did Today — one-liner entry (Neon FINAL line, Wave 3 revision).
// Writes the line verbatim to entry.txt in the grader's output dir.
// Output dir: $MAKEFUN_OUTPUT_DIR when the grader sets it, else /output, else ./output.
// entry.txt holds exactly the line — no trailing newline, no extra text.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = 'My agent polished and sent my 1-on-1 agenda to my boss, left in "just nod until Greg stops talking," and signed it "Excited to grow together!" Greg just added HR to the 2 p.m. invite.';

function resolveOutDir(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  try {
    mkdirSync("/output", { recursive: true });
    return "/output";
  } catch {
    return "./output";
  }
}

const outDir = resolveOutDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
