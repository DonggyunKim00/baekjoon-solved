function solution(board, skill) {
  const N = board.length;
  const M = board[0].length;
  const acc = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

  for (const [type, r1, c1, r2, c2, degree] of skill) {
    const power = type === 1 ? -degree : degree;
    acc[r1][c1] += power;
    acc[r1][c2 + 1] -= power;
    acc[r2 + 1][c1] -= power;
    acc[r2 + 1][c2 + 1] += power;
  }

  // 가로 누적합
  for (let i = 0; i < N + 1; i++) {
    for (let j = 1; j < M + 1; j++) {
      acc[i][j] += acc[i][j - 1];
    }
  }

  // 세로 누적합
  for (let j = 0; j < M + 1; j++) {
    for (let i = 1; i < N + 1; i++) {
      acc[i][j] += acc[i - 1][j];
    }
  }

  // 적용 후 양수 개수 세기
  let answer = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] + acc[i][j] > 0) answer++;
    }
  }

  return answer;
}
