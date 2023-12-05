const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(input) {
  for (let i = 1; i <= 9; i += 1) {
    console.log(input + " * " + i + " = " + input * i);
  }
}

solution(input);
