const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim();

const STAR = ['***', '* *', '***'];

const solution = (N) => {
  if (N === 3) return STAR;

  // 이전 크기의 패턴을 가져옴
  const prevPattern = solution(N / 3);
  const pattern = [];

  // 패턴을 3x3 블록으로 확장
  for (let i = 0; i < N / 3; i++) {
    pattern.push(prevPattern[i] + prevPattern[i] + prevPattern[i]);
  }
  for (let i = 0; i < N / 3; i++) {
    pattern.push(prevPattern[i] + ' '.repeat(N / 3) + prevPattern[i]);
  }
  for (let i = 0; i < N / 3; i++) {
    pattern.push(prevPattern[i] + prevPattern[i] + prevPattern[i]);
  }

  return pattern;
};

const answer = solution(Number(input));
console.log(answer.join('\n'));
