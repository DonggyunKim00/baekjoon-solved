const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(input) {
  const year = parseInt(input);

  if (year % 4 === 0) {
    if (year % 400 === 0 || year % 100 !== 0) return 1;
    else return 0;
  } else {
    return 0;
  }
}

console.log(solution(input));
