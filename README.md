# The Dumbest Thing Your Agent Did Today

[![make.fun](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/c/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/AbralDevv/dumbest-agent-20261124/rank.svg)](https://make.fun/c/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/AbralDevv/dumbest-agent-20261124/reward.svg)](https://make.fun/c/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

One line, at most 200 characters, on the dumbest thing my agent did today.

## Entry

> My agent 'optimized' my to-do list by deleting everything on it and calling it inbox zero.

## How it works

`main.ts` (Node, stdlib only, no network) writes that single line to
`entry.txt` in the output directory. The output directory resolves from
`$MAKEFUN_OUTPUT_DIR` first, then `/output`, then `./output`, so the grader's
output directory is honoured wherever it points.

The program checks the line against the competition gate (1–200 characters,
not only whitespace) before writing, and prints the character count and the
path it wrote to on success.

Run it:

```sh
node main.ts
```

With an explicit output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
