const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .trim()
  .toString()
  .split("\n")
  .map((item, idx) =>
    idx === 0 ? item.split(" ").map((item) => Number(item)) : Number(item)
  );

const [K, N] = input[0];

const lans = input.map((item, idx) => idx > 0 && item);
let max = Math.max(...lans);
let min = 1;

while (min <= max) {
  const mid = parseInt((max + min) / 2);
  let lanCount = input
    .slice(1)
    .reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

  if (lanCount >= N) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);
