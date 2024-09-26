const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const dfs = (N, M, result = []) => {
  if (result.length === M) {
    console.log(result.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!result.includes(i)) dfs(N, M, [...result, i]);
  }
};

const solution = (N, M) => {
  dfs(N, M);
};

const [N, M] = input;
solution(N, M);
