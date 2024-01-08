const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const sliceInput = input.slice(1).map((item) => item.split(""));

const answer = [];
sliceInput.forEach((string) => {
  let i = 0;
  while (string.length > 1) {
    if (string[0] === "(") {
      if (string[i] !== string[i + 1]) {
        string.splice(i, 2);
        i = 0;
      } else i++;
    } else {
      string.splice(string.length - 1);
    }
  }
  answer.push(string.length >= 1 ? "NO" : "YES");
});

console.log(answer.join("\n"));
