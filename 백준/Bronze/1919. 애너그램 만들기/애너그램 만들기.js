const fs = require('fs');

const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(''));

const solution = (input) => {
  let arr = new Array(26).fill(0);
  const [first, second] = input;

  first.forEach((char) => (arr[char.charCodeAt() - 97] += 1));
  second.forEach((char) => (arr[char.charCodeAt() - 97] -= 1));

  return arr.reduce((prev, curr) => {
    if (curr < 0) return prev - curr;
    else return prev + curr;
  }, 0);
};

console.log(solution(input));
