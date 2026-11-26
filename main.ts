// The Funniest Office Joke, Judged Head to Head.
// One line of office comedy: the boss calls the office a family, and
// the family logic gets applied to a raise request, with the punchline last.
// Writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke lands in three beats: the family claim, the raise request,
// and the parental punishment — grounding plus a confiscated stapler.
const familyClaim = "My boss says we're a family here";
const raiseAsk = "so I asked for a raise";
const parentalPunishment = "he grounded me and confiscated my stapler";

function buildJoke(): string {
  return `${familyClaim}, ${raiseAsk} — ${parentalPunishment}.`;
}

const line = buildJoke();
const trimmed = line.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`joke is ${trimmed.length} characters; the gate needs 1 to 200`);
}
if (trimmed !== line) {
  throw new Error("joke must not start or end with whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, line, "utf8");
console.log(`wrote ${line.length}-char joke to ${target}`);
