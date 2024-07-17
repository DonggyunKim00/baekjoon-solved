const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item, idx) => {
    if (!idx) {
      return item.split(' ').map(Number);
    } else {
      return item;
    }
  });

const [N, M] = input.shift();
const spliceArr = input.splice(0, N);
const answer = [];
let map = new Map();
for (let i = 0; i < N; i++) {
  map.set(spliceArr[i], i + 1);
}

for (let i = 0; i < M; i++) {
  const item = input[i];
  if (isNaN(parseInt(item))) {
    answer.push(map.get(item));
  } else {
    answer.push(spliceArr[parseInt(item) - 1]);
  }
}

console.log(answer.join('\n'));
