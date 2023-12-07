const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .split("\n")
  .map((item) => item.split(" "));

for (let i = 0; i < input.length; i += 1) {
  const sortInput = input[i]
    .map((item) => parseInt(item))
    .sort((a, b) => a - b);
  const [a, b, c] = sortInput;
  if (a === 0 && b === 0 && c === 0) return;
  else console.log(a * a + b * b === c * c ? "right" : "wrong");
}
