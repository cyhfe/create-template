#!/usr/bin/env node

import { spawn } from "node:child_process";

spawn("echo", ["Command starts"], {
  stdio: "inherit",
  shell: true,
});
console.log("After spawn()");
