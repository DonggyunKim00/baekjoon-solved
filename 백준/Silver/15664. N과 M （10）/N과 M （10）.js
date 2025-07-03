const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

const [N, M] = input.shift();
const nums = input.shift().sort((a, b) => a - b);
const visited = Array(N).fill(false);

const arr = [];
const answer = new Set();

function solution(depth) {
  if (depth === M) {
    return answer.add(arr.join(' '));
  }

  for (let i = 0; i < N; i++) {
    if (!arr.length || nums[i] >= arr[arr.length - 1]) {
      if (visited[i]) continue;

      arr.push(nums[i]);
      visited[i] = true;

      solution(depth + 1);

      arr.pop();
      visited[i] = false;
    }
  }
}

solution(0);

answer.forEach((item) => console.log(item));
