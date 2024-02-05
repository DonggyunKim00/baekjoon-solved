const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split(" ");

const [A, B, V] = input.map((item) => Number(item));

let day = Math.ceil((V - B) / (A - B));

console.log(day);
