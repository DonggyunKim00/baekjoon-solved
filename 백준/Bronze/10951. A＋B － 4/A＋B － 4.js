const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(input) {
  const splitInput = input.split("\n").map((item) => {
    return item.split(" ").map((item) => parseInt(item));
  });

  for (let i = 0; i < splitInput.length; i += 1) {
    console.log(splitInput[i][0] + splitInput[i][1]);
  }
}

solution(input);
