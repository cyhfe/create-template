import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoName = process.argv[2];

const root = path.resolve(process.cwd(), repoName);

const templateDir = path.resolve(
  fileURLToPath(import.meta.url),
  "../",
  `template`
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

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
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
