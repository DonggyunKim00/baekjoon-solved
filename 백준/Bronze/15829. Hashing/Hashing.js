const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const charArr = input[1].split("");

let sum = 0n;
charArr.forEach((char, idx) => {
  sum += BigInt(char.charCodeAt() - 96) * 31n ** BigInt(idx);
});

console.log(String(sum % 1234567891n));
