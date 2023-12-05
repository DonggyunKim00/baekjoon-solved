const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(str) {
  const splitStr = str.split(" ").map((item) => {
    return parseInt(item);
  });
  const A = splitStr[0];
  const B = splitStr[1];

  if (A > B) return ">";
  else if (A < B) return "<";
  else return "==";
}

console.log(solution(input));