const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');
const [N, M] = input[0].split(' ');

const spliceN = input.splice(1, N);
const spliceM = input.splice(1, M);

const nArr = new Set(spliceN);
const answer = [];
spliceM.forEach((m) => nArr.has(m) && answer.push(m));
answer.sort();

console.log(answer.length);
console.log(answer.join('\n'));
