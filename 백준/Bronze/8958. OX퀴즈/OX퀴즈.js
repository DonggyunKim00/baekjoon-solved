const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let sum = 0;
  let count = 0;
  let newInput = input[i].split("");
  for (let j = 0; j < newInput.length; j++) {
    if (newInput[j] == "O") {
      count++;
      sum += count;
    } else if (newInput[j] == "X") {
      count = 0;
    }
  }
  console.log(sum);
}
