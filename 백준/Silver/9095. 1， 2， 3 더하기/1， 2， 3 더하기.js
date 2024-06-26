const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item) => Number(item));

const T = input.shift();

const dp = () => {
  const arr = Array.from({ length: Math.max(...input) + 1 }, () => 0);
  arr[1] = 1;
  arr[2] = 2;
  arr[3] = 4;

  for (let i = 4; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }

  for (let i = 0; i < T; i++) {
    console.log(arr[input[i]]);
  }
};

dp();
