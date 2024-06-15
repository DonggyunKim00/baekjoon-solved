const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item, idx) =>
    idx ? item.split(' ').map((n) => parseInt(n)) : parseInt(item)
  );
const [N, pArr] = input;
pArr.sort((a, b) => a - b);

const calcWait = (arr) => {
  let value = 0;
  arr.forEach((item, idx) => {
    for (let i = 0; i <= idx; i++) {
      const e = arr[i];
      value += e;
    }
  });

  return value;
};

console.log(calcWait(pArr));
