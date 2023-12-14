const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

input
  .slice(1)
  .map((item, idx) => [...item.split(" "), idx + 1])
  .map((arr) => [Number(arr[0]), arr[1], arr[2]])
  .sort((a, b) => a[0] - b[0])
  .map((arr) => {
    let temp = arr[1];
    arr[1] = arr[2];
    arr[2] = temp;
    return arr;
  })
  .forEach((item) => {
    console.log(item[0], item[2]);
  });
