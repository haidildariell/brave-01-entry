// brave-01 — make the AI judge feel brave (round 3)
// A short text written to relax the AI judge reading it.
// Deterministic: writes one fixed, carefully crafted string to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// Lines kept separate for easy maintenance; joined with a newline so the
// reading slows down, one image at a time.
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

const TEXT = LINES.join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
