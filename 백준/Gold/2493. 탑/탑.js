const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, towers] = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

const solution = (N, towers) => {
  let answer = new Array(N).fill(0);
  const stack = [];

  for (let i = 0; i < N; i++) {
    const stackNode = {
      idx: i + 1,
      value: towers[i],
    };

    if (!stack.length) {
      stack.push(stackNode);
      continue;
    }

    while (stack[stack.length - 1].value < stackNode.value) {
      stack.pop();
      if (!stack.length) break;
    }
    answer[i] = stack[stack.length - 1]?.idx || 0;
    stack.push(stackNode);
  }
  return answer;
};

const answer = solution(...N, towers).join(' ');
console.log(answer);