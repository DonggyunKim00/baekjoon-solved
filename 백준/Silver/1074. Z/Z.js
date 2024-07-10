const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [N, r, c] = input;
const tracking = [];
const initArr = [
  [0, 1],
  [2, 3],
];
const answerArr = [
  [null, null],
  [null, null],
];

const zlogic = (value) => {
  answerArr[0][0] = initArr[0][0] + value * 4;
  answerArr[0][1] = initArr[0][1] + value * 4;
  answerArr[1][0] = initArr[1][0] + value * 4;
  answerArr[1][1] = initArr[1][1] + value * 4;
};

const guess = (r, c) => {
  if (r >= 2 || c >= 2) {
    const prevR = Math.floor(r / 2);
    const prevC = Math.floor(c / 2);
    tracking.push([prevR, prevC]);
    guess(prevR, prevC);
  } else {
    while (tracking.length) {
      const [R, C] = tracking.pop();
      if (R > 1 || C > 1) {
        zlogic(answerArr[R % 2][C % 2]);
      } else {
        zlogic(initArr[r][c]);
      }
    }
  }
};

guess(r, c);

if (2 ** N > 2) {
  if (r <= 1 && c <= 1) {
    console.log(initArr[r][c]);
  } else {
    console.log(answerArr[r % 2][c % 2]);
  }
} else {
  console.log(initArr[r][c]);
}
