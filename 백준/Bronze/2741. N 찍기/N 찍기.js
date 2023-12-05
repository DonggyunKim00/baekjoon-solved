const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(input) {
  const answer = [];
  for (let i = 1; i <= input; i += 1) {
    answer.push(i);
  }

  console.log(answer.join("\n"));
}

solution(input);
