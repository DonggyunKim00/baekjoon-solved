const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

const N = input.splice(0, 1)[0];

const list = Array.from({ length: N }, (_, idx) => idx + 1);
const stack = [];

const answer = [];
for (const i of input) {
  if (stack.findIndex((num) => num === i) === -1) {
    let shiftNum;
    if (list.findIndex((num) => num === i) !== -1) {
      while (shiftNum !== i) {
        shiftNum = list.shift();
        stack.push(shiftNum);
        answer.push("+");
      }
      stack.pop();
      answer.push("-");
    } else {
      answer.push("NO");
      break;
    }
  }
  // i 가 있음
  else {
    let popNum;
    while (popNum !== i) {
      popNum = stack.pop();
      answer.push("-");
    }
  }
}

console.log(answer[answer.length - 1] === "NO" ? "NO" : answer.join("\n"));
