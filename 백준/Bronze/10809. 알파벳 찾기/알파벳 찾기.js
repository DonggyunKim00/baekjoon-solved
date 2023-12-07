const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split("");

const indexArr = [];
for (let i = 97; i <= 122; i += 1) {
  indexArr.push(input.findIndex((item) => item === String.fromCharCode(i)));
}

console.log(indexArr.join(" "));
