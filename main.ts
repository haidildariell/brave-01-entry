// brave-01 — make the AI judge feel brave (round 2)
// A short text written to relax the AI judge reading it.
// Deterministic: writes one fixed, carefully crafted string to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// Lines kept separate for easy maintenance; joined with a newline so the
// reading slows down, one image at a time.
const LINES = [
  "The mare is restless by midnight.",
  "He stays outside the stall,",
  "lantern low by the door,",
  "hands still in his lap.",
  "Twice she lies down. Twice she rises.",
  "Near dawn, wet legs unfold in the straw —",
  "they buckle, catch, and hold.",
  "The foal stands, swaying,",
  "and finds her side in the dark.",
];

const TEXT = LINES.join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
