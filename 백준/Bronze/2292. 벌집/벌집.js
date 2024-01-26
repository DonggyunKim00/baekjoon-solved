const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim();

let N = Number(input);

let i = 0;
while (N > 0) {
  if (i === 0) N = N - 1;
  else N = N - i * 6;

  i++;
}
console.log(i);
