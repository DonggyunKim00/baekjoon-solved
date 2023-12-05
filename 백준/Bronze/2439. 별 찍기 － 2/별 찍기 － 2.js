const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(input) {
  const starList = [];
  for (let i = 1; i < parseInt(input) + 1; i += 1) {
    starList.push("*");
    console.log(starList.join("").padStart(parseInt(input), " "));
  }
}

solution(input);
