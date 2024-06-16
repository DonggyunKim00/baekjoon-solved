const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item) => parseInt(item));

const T = input[0];

const fibo = (n) => {
  const memo = Array.from({ length: n + 1 }, () => 0);
  memo[0] = 0;
  memo[1] = 1;
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo;
};

const answer = [];
for (let i = 1; i <= T; i++) {
  if (input[i] === 0) {
    answer.push([1, 0]);
  } else if (input[i] === 1) {
    answer.push([0, 1]);
  } else {
    const fiboArr = fibo(input[i]);
    answer.push([fiboArr[fiboArr.length - 2], fiboArr[fiboArr.length - 1]]);
  }
}

console.log(answer.join('\n').replaceAll(',', ' '));
