const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const required = [
  "index.html",
  path.join("assets", "logo.webp"),
  path.join("assets", "hero-kids.webp")
];

for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) {
    throw new Error(`Missing required deployment file: ${file}`);
  }
}

console.log("Static site build verified.");
