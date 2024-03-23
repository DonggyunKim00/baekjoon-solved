const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().toString();

let init = 666;
let count = 1;
while (count < parseInt(input)) {
  init += 1;
  if (init.toString().includes("666")) {
    count += 1;
  }
}
console.log(init);
