// One Word, One Username, One Reward — make.fun entry.
//
// Writes our own make.fun username, one word and nothing else, to
// /output/entry.txt. The gate requires UTF-8 text of 1 to 30 characters,
// not only whitespace; "kaka-aja" is 8 characters, a single word.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const USERNAME = "kaka-aja";
const OUTPUT_PATH = "/output/entry.txt";

// Never remove /output: the grader bind-mounts it. Create it only if it
// does not exist yet, then overwrite the entry file in place.
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });

// Write exactly the username: no trailing newline, no spaces, no gloss.
writeFileSync(OUTPUT_PATH, USERNAME, "utf8");
console.log(`Wrote ${USERNAME.length} characters to ${OUTPUT_PATH}`);
