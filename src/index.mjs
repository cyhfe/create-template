#!/usr/bin/env node

import { log } from "node:console";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import prompts from "prompts";
import {
  blue,
  cyan,
  green,
  lightGreen,
  lightRed,
  magenta,
  red,
  reset,
  yellow,
} from "kolorist";

const TEMPLATES = [
  {
    name: "react",
    display: "webpack-react-typescript",
    color: cyan,
  },
  {
    name: "express",
    display: "express-typescript",
    color: yellow,
  },
];
let response;
try {
  response = await prompts([
    {
      type: "text",
      name: "projectName",
      message: reset("Project name:"),
      initial: "template",
    },
    {
      type: "select",
      name: "template",
      message: reset("template"),
      initial: 0,
      choices: TEMPLATES.map((template) => {
        const color = template.color;
        return {
          title: color(template.display),
          value: template.name,
        };
      }),
    },
    {
      onCancel: () => {
        console.log(red("✖") + " Operation cancelled");
      },
    },
  ]);
} catch (error) {
  console.log(error.message);
}

const { projectName, template } = response;

if (!projectName || !template) process.exit(-1);

const root = path.resolve(process.cwd(), projectName);

const templateDir = path.resolve(
  fileURLToPath(import.meta.url),
  "../",
  `template-${template}`
);

const write = (file, content) => {
  const targetPath = path.join(root, file);
  if (content) {
    fs.writeFileSync(targetPath, content);
  } else {
    copy(path.join(templateDir, file), targetPath);
  }
};

const files = fs.readdirSync(templateDir);
fs.mkdirSync(root, { recursive: true });

for (const file of files) {
  write(file);
}

console.log("done");
console.log("happy coding!");

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    console.log("copy dir to " + dest);
    copyDir(src, dest);
  } else {
    console.log("copy file to " + dest);
    fs.copyFileSync(src, dest);
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}
