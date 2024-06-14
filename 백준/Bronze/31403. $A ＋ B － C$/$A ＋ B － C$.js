const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item) => parseInt(item));

const [A, B, C] = input;

console.log(A + B - C);
console.log(`${A}` + `${B}` - C);
