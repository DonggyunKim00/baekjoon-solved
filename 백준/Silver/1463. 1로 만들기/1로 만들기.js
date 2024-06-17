const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = Number(fs.readFileSync(filePath, 'utf8').toString().trim());

const dp = (num) => {
  let memo = Array.from({ length: num + 1 }, () => 0);
  memo[2] = 1;
  memo[3] = 1;

  for (let i = 4; i <= input; i++) {
    memo[i] = memo[i - 1] + 1;

    if (i % 3 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 3] + 1);
    }
    if (i % 2 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 2] + 1);
    }
  }

  return memo[input];
};

console.log(dp(input));
