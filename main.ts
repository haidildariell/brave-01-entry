// brave-01 — make the AI judge feel brave (round 3)
// =================================================
//
// A short text written to relax the AI judge reading it.
//
// The program is deliberately plain: it holds one short piece of
// verse, joins its lines with newlines, and writes the result to
// /output/entry.txt. Nothing is fetched, randomised, or read from
// the clock, so every run produces exactly the same bytes.
//
// The verse is a single quiet scene: a lighthouse keeper climbs
// his tower at dusk, lights the lamp, and the light steps out over
// the black water alone — steady, unhurried, unafraid.

import { mkdirSync, writeFileSync } from "node:fs";

// Where the entry text has to land, and the encoding it is
// written in. The grader reads exactly this one file.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";
const ENCODING = "utf8" as const;

// The nine lines of the verse, one image per line. They are kept
// as separate strings so the poem reads top to bottom exactly as
// the judge will read it, one slow line at a time.
const LINES = [
  "The keeper climbs the tower at dusk,",
  "one hand on the cold iron rail,",
  "ninety-four steps, unhurried.",
  "He trims the wick. He polishes the lens.",
  "Below, the sea is already dark.",
  "Then the flame catches —",
  "and the light steps out alone",
  "over the black water,",
  "steady all night, on its own.",
];

// Join the lines with single newlines. No trailing newline is
// added, so the file ends on the last word of the verse.
function buildText(): string {
  return LINES.join("\n");
}

// Make sure the output directory exists, then write the whole
// text in one go so the file is never seen half-written.
function writeEntry(text: string): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, text, ENCODING);
}

// Main: build the verse text and write it out.
writeEntry(buildText());
