const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const [cardArr, findNumArr] = [
  input[1]
    .split(" ")
    .map((num) => Number(num))
    .sort((a, b) => a - b),
  input[3].split(" ").map((num) => Number(num)),
];

const countMap = new Map();

for (let i = 0; i < cardArr.length; i++) {
  if (countMap.has(cardArr[i])) {
    countMap.set(cardArr[i], countMap.get(cardArr[i]) + 1);
  } else {
    countMap.set(cardArr[i], 1);
  }
}

const answer = [];
for (let i = 0; i < findNumArr.length; i++) {
  if (countMap.has(findNumArr[i])) answer.push(countMap.get(findNumArr[i]));
  else answer.push(0);
}
console.log(answer.join(" "));
