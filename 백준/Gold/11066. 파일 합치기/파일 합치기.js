const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const T = Number(input.shift());

const solution = (K, files) => {
  // 누적합 배열 생성 (0-based 인덱스 기준)
  const prefixSum = Array(K + 1).fill(0);
  for (let i = 1; i <= K; i++) {
    prefixSum[i] = prefixSum[i - 1] + files[i - 1];
  }

  // 구간 합 계산 함수
  const sum = (i, j) => prefixSum[j + 1] - prefixSum[i];

  // DP 배열 초기화
  const dp = Array.from({ length: K }, () => Array(K).fill(0));

  // 구간 길이 2부터 K까지 늘려가며 계산
  for (let length = 2; length <= K; length++) {
    for (let i = 0; i <= K - length; i++) {
      let j = i + length - 1;
      dp[i][j] = Infinity;

      for (let k = i; k < j; k++) {
        const cost = dp[i][k] + dp[k + 1][j] + sum(i, j);
        if (cost < dp[i][j]) {
          dp[i][j] = cost;
        }
      }
    }
  }

  // 최종 결과는 전체 구간 최소 비용
  console.log(dp[0][K - 1]);
};

for (let t = 0; t < T; t++) {
  const k = Number(input[t * 2]);
  const nums = input[t * 2 + 1].split(' ').map(Number);
  solution(k, nums);
}
