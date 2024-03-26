const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim();

let value = parseInt(input);

let count = 0;
let answer = 0;
while (true) {
  const dividefive = Math.floor(value / 5) - count;
  if (dividefive < 0) {
    answer = -1;
    break;
  } else if ((value - dividefive * 5) % 3 === 0) {
    answer = dividefive + (value - dividefive * 5) / 3;
    break;
  } else count += 1;
}

console.log(answer);
