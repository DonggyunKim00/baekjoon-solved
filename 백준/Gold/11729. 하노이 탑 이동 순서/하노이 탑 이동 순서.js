const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim();

const solution = (N) => {
  const answer = [];
  const recursion = (num, from, other, to) => {
    if (num === 0) {
      return;
    }
    // 받아온 원반 갯수보다 하나 적은 원반들을 목적지가 아닌 곳으로 재귀적으로 이동
    recursion(num - 1, from, to, other);

    // 맨 아래 원반을 목적지로 이동시킴
    answer.push([from, to]);

    //다른 곳으로 옮겼던 원반들을 그 위에 얹음
    recursion(num - 1, other, from, to);
  };

  recursion(N, 1, 2, 3);
  return answer;
};

const answer = solution(Number(input));
console.log(answer.length);
console.log(answer.map((item) => item.join(' ')).join('\n'));
