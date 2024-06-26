const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = Number(fs.readFileSync(filePath, 'utf8').toString().trim());

const memo = Array.from({ length: input + 1 }, () => 0);
const dp = () => {
  memo[1] = 1;
  memo[2] = 2;
  for (let i = 3; i < input + 1; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
  }
};

dp();
console.log(memo[input]);
