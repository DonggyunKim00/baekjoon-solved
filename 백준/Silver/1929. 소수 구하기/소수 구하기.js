const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));

const [M, N] = input;

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

let count = M;
const answer = [];
while (count <= N && count >= M) {
  if (isPrime(count)) answer.push(count);
  count += 1;
}

console.log(answer.join("\n"));
