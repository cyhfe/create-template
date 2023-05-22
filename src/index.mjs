#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const templateDir = path.resolve(
  fileURLToPath(import.meta.url),
  "../..",
  `template`
)

const dir = fs.readdirSync("./");
console.log(dir);

console.log(templateDir);
