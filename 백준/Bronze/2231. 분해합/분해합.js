const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim();

const N = Number(input);

const sumSplitNum = (num) => {
  return (
    num
      .toString()
      .split("")
      .map((item) => Number(item))
      .reduce((cur, acc) => cur + acc, 0) + num
  );
};

const answer = [];
for (let i = 1; i <= N; i++) {
  if (N === sumSplitNum(i)) answer.push(i);
}

if (answer.length === 0) {
  console.log(0);
} else {
  console.log(Math.min(...answer));
}
