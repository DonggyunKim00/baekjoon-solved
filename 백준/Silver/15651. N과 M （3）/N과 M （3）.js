const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [N, M] = input;
const arr = [];
const answer = [];

const solution = (depth) => {
  if (depth === M) {
    answer.push(arr.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    arr.push(i);
    solution(depth + 1);
    arr.pop();
  }
};

solution(0);

console.log(answer.join('\n'));
