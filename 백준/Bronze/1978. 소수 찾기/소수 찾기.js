const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .split("\n")
  .map((item, idx) => (idx === 0 ? item : item.split(" ")));

function isPrime(N) {
  if (N > 1) {
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i === 0) return false;
    }
    return true;
  }
}

console.log(input[1].filter((item) => isPrime(item)).length);
