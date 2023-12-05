const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(input) {
  const splitInput = input.split(" ");
  const A = parseInt(splitInput[0]);
  const B = parseInt(splitInput[1]);
  console.log(A + B);
  console.log(A - B);
  console.log(A * B);
  console.log(parseInt(A / B));
  console.log(A % B);
}

solution(input);
