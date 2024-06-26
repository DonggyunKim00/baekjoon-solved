const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

const [N, M] = input.shift();
const nums = input.shift();
const sums = Array.from({ length: N + 1 }, () => 0);

sums[1] = 1;
for (let i = 1; i < N + 1; i++) {
  sums[i] = sums[i - 1] + nums[i - 1];
}

const answer = [];
input.forEach(([i, j]) => {
  answer.push(sums[j] - sums[i - 1]);
});

console.log(answer.join('\n'));
