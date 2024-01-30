const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const charArr = input[1].split("");

let sum = 0;
charArr.forEach((char, idx) => {
  sum += (char.charCodeAt() - 96) * 31 ** idx;
});

console.log(sum);
