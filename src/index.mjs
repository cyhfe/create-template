#!/usr/bin/env node

import { execSync } from "child_process";

const runCommand = (command) => {
  try {
    execSync(`${command} `, { stdio: "inherit" });
  } catch (error) {
    console.log(`Failed to execute ${command}`, error);
    process.exit(-1);
  }
};

const repoName = process.argv[2];

const gitCheckoutCommand = `git clone https://github.com/cyhfe/webpack-template.git ${repoName}`;

console.log("run git clone");

runCommand(gitCheckoutCommand);
