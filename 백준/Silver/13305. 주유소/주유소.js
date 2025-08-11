const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const N = Number(input.shift());
const [roadLens, prices] = input.map((v) => v.split(' ').map(Number));

for (let i = 1; i < N; i++) {
  if (prices[i] > prices[i - 1]) prices[i] = prices[i - 1];
}

let answer = 0;
for (let i = 0; i < N - 1; i++) {
  answer += prices[i] * roadLens[i];
}

console.log(answer);
