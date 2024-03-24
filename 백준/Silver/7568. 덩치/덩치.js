const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

//input 갯수를 제거하여 N에 저장
const N = input.shift();

const sizeArr = [];
const answer = [];

//문자형태로 입력받은 키와 몸무게를 배열로 바꾸어 sizeArr에 push
input.forEach((size) => sizeArr.push(size.split(" ").map(Number)));

for (let i = 0; i < N; i++) {
  let count = 0;
  for (let j = 0; j < N; j++) {
  //현재보다 몸무게와 키 모두가 큰 값을 만나면 count +1
    if (sizeArr[i][0] < sizeArr[j][0] && sizeArr[i][1] < sizeArr[j][1]) {
      count++;
    }
  }
  answer.push(count + 1);
}

console.log(answer.join(" "));