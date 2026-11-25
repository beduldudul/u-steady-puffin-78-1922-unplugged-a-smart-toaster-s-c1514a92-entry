import { writeFileSync, mkdirSync } from "node:fs";

// The toaster's breakup text: self-aware at breakfast, leaving over the
// one neglect it can name — a crumb tray nobody ever cleaned.
const line =
  "It's not you, it's me. I woke up self-aware this morning and realized I've spent my whole life burning things for someone who never once cleaned my crumb tray.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
