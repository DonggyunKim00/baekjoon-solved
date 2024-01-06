const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const [N, M] = [Number(input[0]), Number(input[2])];
const nArr = input[1]
  .split(" ")
  .map((item) => Number(item))
  .sort((a, b) => a - b);
const mArr = input[3].split(" ").map((item) => Number(item));

const answer = [];
const binarySearch = (findValue) => {
  let front = 0;
  let middle;
  let rear = N - 1;

  while (front <= rear) {
    middle = Math.ceil((front + rear) / 2);
    if (nArr[middle] === findValue) {
      return 1;
    } else if (nArr[middle] < findValue) {
      front = middle + 1;
    } else {
      rear = middle - 1;
    }
  }
  return 0;
};

for (let i = 0; i < M; i++) {
  answer.push(binarySearch(mArr[i]));
}
console.log(answer.join("\n"));
