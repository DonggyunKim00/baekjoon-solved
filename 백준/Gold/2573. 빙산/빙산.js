const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));
const [dx, dy] = [
  [1, -1, 0, 0],
  [0, 0, 1, -1],
];

// 빙산을 녹이는 로직 최적화: 빙산 위치만 탐색
const meltIcebergs = (N, M, graph) => {
  const meltQueue = [];
  const meltingPoints = Array.from({ length: N }, () =>
    Array(M).fill(0)
  );

  // 빙산이 있는 위치만 처리
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] > 0) {
        let seaCount = 0;

        // 주변의 바다(0인 부분) 카운트
        for (let d = 0; d < 4; d++) {
          const nx = i + dx[d];
          const ny = j + dy[d];

          if (nx >= 0 && ny >= 0 && nx < N && ny < M && graph[nx][ny] === 0) {
            seaCount++;
          }
        }

        // 녹일 양을 기록
        if (seaCount > 0) {
          meltQueue.push([i, j, seaCount]);
        }
      }
    }
  }

  // 빙산을 녹이는 과정
  meltQueue.forEach(([x, y, melt]) => {
    graph[x][y] = Math.max(graph[x][y] - melt, 0);
  });
};

// 빙산의 구역을 세는 BFS 함수
const countIcebergs = (N, M, graph, visited) => {
  let regionsCount = 0;

  const bfs = (sx, sy) => {
    const queue = [[sx, sy]];
    visited[sx][sy] = true;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let d = 0; d < 4; d++) {
        const nx = x + dx[d];
        const ny = y + dy[d];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < N &&
          ny < M &&
          graph[nx][ny] > 0 &&
          !visited[nx][ny]
        ) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] > 0 && !visited[i][j]) {
        bfs(i, j);
        regionsCount++;
      }
    }
  }

  return regionsCount;
};

const solution = (N, M, graph) => {
  let time = 0;

  while (true) {
    const visited = Array.from({ length: N }, () => Array(M).fill(false));

    // 빙산 녹이기
    meltIcebergs(N, M, graph);

    // 빙산 구역 카운트
    const regionsCount = countIcebergs(N, M, graph, visited);

    // 빙산이 다 녹았는지 체크
    if (regionsCount === 0) {
      return 0;
    }

    // 두 개 이상의 구역으로 분리되면 시간 리턴
    if (regionsCount >= 2) {
      return time + 1;
    }

    time++;
  }
};

const [[N, M], ...graph] = input;
const answer = solution(N, M, graph);
console.log(answer);
