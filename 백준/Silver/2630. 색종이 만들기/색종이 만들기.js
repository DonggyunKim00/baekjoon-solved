const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item, idx) => {
    if (idx) {
      return item.split(' ').map(Number);
    } else {
      return Number(item);
    }
  });

const N = input.shift();
const ans = {
  white: 0,
  blue: 0,
};

const dnc = (size, matrix) => {
  if (size > 1) {
    if (matrix[0][0] && matrix.flat().every((item) => item === matrix[0][0])) {
      ans.blue += 1;
      return;
    } else if (
      !matrix[0][0] &&
      matrix.flat().every((item) => item === matrix[0][0])
    ) {
      ans.white += 1;
      return;
    }

    const newsize = size / 2;
    const matrix1 = [];
    const matrix2 = [];
    const matrix3 = [];
    const matrix4 = [];

    // 1사분면 matrix 만들기
    for (let col = 0; col < newsize; col++) {
      const innerArr = [];

      for (let row = 0; row < newsize; row++) {
        innerArr.push(matrix[col][row]);
      }
      matrix1.push(innerArr);
    }

    // 2사분면 matrix 만들기
    for (let col = 0; col < newsize; col++) {
      const innerArr = [];
      for (let row = newsize; row < newsize * 2; row++) {
        innerArr.push(matrix[col][row]);
      }
      matrix2.push(innerArr);
    }

    // 3사분면 matrix 만들기
    for (let col = newsize; col < newsize * 2; col++) {
      const innerArr = [];
      for (let row = 0; row < newsize; row++) {
        innerArr.push(matrix[col][row]);
      }
      matrix3.push(innerArr);
    }

    // 4사분면 matrix 만들기
    for (let col = newsize; col < newsize * 2; col++) {
      const innerArr = [];

      for (let row = newsize; row < newsize * 2; row++) {
        innerArr.push(matrix[col][row]);
      }
      matrix4.push(innerArr);
    }

    dnc(newsize, matrix1);
    dnc(newsize, matrix2);
    dnc(newsize, matrix3);
    dnc(newsize, matrix4);
  } else {
    if (matrix[0][0]) {
      ans.blue += 1;
      return;
    } else {
      ans.white += 1;
      return;
    }
  }
};

dnc(N, input);

console.log(ans.white);
console.log(ans.blue);
