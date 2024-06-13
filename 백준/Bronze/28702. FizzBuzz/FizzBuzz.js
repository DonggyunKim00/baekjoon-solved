const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const newArr = [];
input.forEach((item) => {
  if (!isNaN(parseInt(item))) newArr.push(parseInt(item));
});

const firstNumIdxInInput = input.findIndex((item) => item == newArr[0]);

const beforeAnswer = () => {
  const value = parseInt(input[firstNumIdxInInput]);
  switch (firstNumIdxInInput) {
    case 0:
      return value + 3;
    case 1:
      return value + 2;
    case 2:
      return value + 1;
  }
};

const fizzbuzz = () => {
  const value = beforeAnswer();
  if (value % 15 === 0) {
    return 'FizzBuzz';
  } else if (value % 3 === 0) {
    return 'Fizz';
  } else if (value % 5 === 0) {
    return 'Buzz';
  } else {
    return value;
  }
};

console.log(fizzbuzz());
