const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

input.splice(input.length - 1, input.length);

const charArr = [];
input.forEach((item) => {
  const innerArr = [];
  item.split("").forEach((char) => {
    if (char === "(" || char === "[") innerArr.push(char);
    else if (char === ")" || char === "]") innerArr.push(char);
  });
  charArr.push(innerArr);
});

charArr.forEach((arr) => {
  let idx = 0;
  while (idx < arr.length) {
    if (arr[idx] + arr[idx + 1] === "[]" || arr[idx] + arr[idx + 1] === "()") {
      arr.splice(idx, 2);
      idx = 0;
    } else {
      idx += 1;
    }

    if (arr.length === 0) break;
  }
});

console.log(
  charArr.map((item) => (item.length === 0 ? "yes" : "no")).join("\n")
);
