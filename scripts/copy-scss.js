const fs = require("fs");
const path = require("path");

const src = path.resolve(__dirname, "../src/style.scss");
const destDir = path.resolve(__dirname, "../dist/scss");
const dest = path.join(destDir, "shrbtn.scss");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(src, dest);
console.log("SCSS copied to dist/scss/shrbtn.scss");
