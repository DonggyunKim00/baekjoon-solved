const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item, idx) => {
    if (idx === 0) return parseInt(item);
    else return item.split(' ').map((item) => parseInt(item));
  });

const [N, sizeList, bundle] = input;
const [T, P] = bundle;

const tAnswer = () => {
  let count = 0;
  sizeList.forEach((item) => {
    const value = Math.floor(item / T);
    if (item) {
      if (item % T === 0) count += value;
      else count += value + 1;
    }
  });

  return count;
};

const penAnswer = () => {
  const first = Math.floor(N / P);
  const second = N - P * first;
  return [first, second].join(' ');
};

console.log(tAnswer());
console.log(penAnswer());
