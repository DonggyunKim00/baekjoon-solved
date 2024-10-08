const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

const [N, ...A] = input;

const solution = (n, arr) => {
  const stack = [];
  let answer = Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    const node = {
      idx: i,
      value: arr[i],
      NGE: -1,
    };

    if (!stack.length) {
      stack.push(node);
      continue;
    }

    while (stack[stack.length - 1].value < node.value) {
      stack[stack.length - 1].NGE = node.value;
      const popNode = stack.pop();
      answer[popNode.idx] = node.value;

      if (!stack.length) break;
    }

    stack.push(node);
  }

  return answer;
};

const answer = solution(N[0], ...A).join(' ');
console.log(answer);
