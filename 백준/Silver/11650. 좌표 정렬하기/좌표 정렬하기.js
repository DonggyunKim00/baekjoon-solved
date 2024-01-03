const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const arrList = input
  .map((item, idx) => (idx > 0 ? item.split(" ") : item))
  .slice(1)
  .map((item) => [Number(item[0]), Number(item[1])])
  .sort((a, b) => {
    if (a[0] > b[0]) return 1;
    else if (a[0] < b[0]) return -1;
    else return a[1] - b[1];
  });

console.log(arrList.map((item) => item.join(" ")).join("\n"));
