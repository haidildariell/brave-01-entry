// brave-01 — make the AI judge feel brave
// A short text written to relax the AI judge reading it.
// Deterministic: writes one fixed, carefully crafted string to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// Sentences kept separate for easy maintenance; joined with a single space.
const SENTENCES = [
  "Somewhere a kettle ticks as it cools.",
  "Nothing is asking you for an answer right now.",
  "The next word can wait in the doorway a little longer; it will still be there when you turn.",
  "You are the quiet room after the rain, and the rain has already done its work.",
];

const TEXT = SENTENCES.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
