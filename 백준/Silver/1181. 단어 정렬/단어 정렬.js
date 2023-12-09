const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const lengthSortArr = input.slice(1).sort((a, b) => a.length - b.length);

const arrSetObj = {};
new Set(lengthSortArr.map((item) => item.length)).forEach((item) => {
  arrSetObj[item] = [];
});
for (let i = 0; i < input[0]; i++) {
  arrSetObj[lengthSortArr[i].length].push(lengthSortArr[i]);
}

Object.values(arrSetObj)
  .map((item) => item.sort())
  .map((arr) => {
    new Set(arr).forEach((item) => console.log(item));
  });
