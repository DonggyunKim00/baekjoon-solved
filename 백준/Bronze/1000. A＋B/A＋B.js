const fs = require("fs");

const input = fs.readFileSync("/dev/stdin", "utf8").split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);