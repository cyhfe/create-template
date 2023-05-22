#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const templateDir = path.resolve(
  fileURLToPath(import.meta.url),
  "../",
  `template`
);

const dir = fs.readdirSync(templateDir);
console.log(dir);

console.log(templateDir);

const write = (file, content) => {
  const targetPath = path.join(root, renameFiles[file] ?? file);
  if (content) {
    fs.writeFileSync(targetPath, content);
  } else {
    copy(path.join(templateDir, file), targetPath);
  }
};
