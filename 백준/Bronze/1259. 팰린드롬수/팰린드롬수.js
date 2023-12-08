const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .split("\n")
  .map((item) => item.split(""));

for (let i = 0; i < input.length; i += 1) {
  if (input[i].length === 1 && input[i][0] === "0") {
    return;
  } else {
    if (input[i].length % 2 === 0) {
      const middleIdx = input[i].length / 2;
      const spliceArr = input[i].splice(0, middleIdx);
      JSON.stringify(spliceArr) === JSON.stringify(input[i].reverse())
        ? console.log("yes")
        : console.log("no");
    } else {
      const middleIdx = Math.round(input[i].length / 2);
      const spliceArr = input[i].splice(0, middleIdx - 1);
      JSON.stringify(spliceArr) ===
      JSON.stringify(input[i].slice(1, input[i].length).reverse())
        ? console.log("yes")
        : console.log("no");
    }
  }
}
