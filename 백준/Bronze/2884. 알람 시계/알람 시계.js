const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(input) {
  const splitInput = input.split(" ").map((item) => {
    return parseInt(item);
  });
  const minusMinute = splitInput[1] - 45;

  if (minusMinute < 0) {
    splitInput[0] === 0 ? (splitInput[0] = 23) : (splitInput[0] -= 1);
    splitInput[1] = 60 + minusMinute;
  } else {
    splitInput[1] = minusMinute;
  }

  return splitInput.join(" ");
}

console.log(solution(input));
