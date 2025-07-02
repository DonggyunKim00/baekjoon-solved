const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

const [[N, M], [...nums]] = input;
const sortNums = nums.sort((a, b) => a - b);
const visited = Array(N).fill(false);
const arr = [];
const answer = new Set();

const solution = (depth) => {
  if (depth === M) {
    if (!answer.has(arr.join(' '))) return answer.add(arr.join(' '));
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;

    arr.push(sortNums[i]);
    visited[i] = true;

    solution(depth + 1);

    arr.pop(sortNums[i]);
    visited[i] = false;
  }
};

solution(0);
answer.forEach((item) => console.log(item));
