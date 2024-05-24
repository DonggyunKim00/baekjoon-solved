const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item, idx) => Number(item));
input.splice(0, 1);
input.sort((a, b) => a - b);

const avg = Math.round(
  input.reduce((prev, curr) => prev + curr) / input.length
);
console.log(avg === -0 ? 0 : avg);
console.log(input[Math.floor(input.length / 2)]);

const countObj = {};
input.forEach((item) => {
  if (countObj[item]) countObj[item] += 1;
  else countObj[item] = 1;
});
const newarr = [];
Object.entries(countObj).forEach((arr) => {
  const [key, value] = arr;
  newarr.push(value);
});
const findMaxKey = [];
Object.entries(countObj).forEach((item) => {
  const [key, value] = item;
  if (value === Math.max(...newarr)) findMaxKey.push(key);
});
const nums = findMaxKey.map((item) => Number(item)).sort((a, b) => a - b);
console.log(nums.length > 1 ? nums[1] : nums[0]);

console.log(Math.max(...input) - Math.min(...input));
