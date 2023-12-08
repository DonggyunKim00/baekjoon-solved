const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .split(" ")
  .map((item) => Number(item));

const factorial = (N) => {
  if (N > 0) {
    return N * factorial(N - 1);
  } else {
    return 1;
  }
};
const [N, K] = input;
console.log(factorial(N) / (factorial(K) * factorial(N - K)));
