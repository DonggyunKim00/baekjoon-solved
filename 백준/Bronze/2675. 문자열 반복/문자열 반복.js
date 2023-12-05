const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(input) {
  const splitInput = input.split("\n").map((element) => {
    return element.split(" ");
  });
  const answer = [];

  splitInput.forEach((element) => {
    if (!element[1]) return;
    else
      element[1].split("").forEach((code) => {
        for (let i = 0; i < element[0]; i += 1) answer.push(code);
      });
    answer.push("\n");
  });

  return answer.join("");
}

console.log(solution(input));
