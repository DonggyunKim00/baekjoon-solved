const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item, idx) => {
    if (!idx) {
      return Number(item);
    } else {
      return item.split(' ').map(Number);
    }
  });

let totalCase = input.shift();
const move = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
let answer = [];

const bfs = ([startX, startY], graph) => {
  const queue = [[startX, startY]];

  while (queue.length) {
    const [px, py] = queue.shift();

    // 지나간 자리는 0으로 바꾸기 => 안하면 무한루프
    if (!graph[px][py]) continue;
    else graph[px][py] = 0;

    // graph에서 4방향 1인지 확인, 1이면 queue에 삽입
    for (let i = 0; i < 4; i++) {
      const xpos = px + move[i][0];
      const ypos = py + move[i][1];

      if (
        xpos < 0 ||
        ypos < 0 ||
        xpos >= graph.length ||
        ypos >= graph[0].length
      )
        continue;
      if (graph[xpos][ypos]) queue.push([xpos, ypos]);
    }
  }
};

while (totalCase > 0) {
  if (input[0].length === 3) {
    let sum = 0;
    const [M, N, K] = input.shift();
    const pointArr = input.splice(0, K);
    let graph = Array.from({ length: M }, () =>
      Array.from({ length: N }, () => 0)
    );

    // 배추 넣기
    pointArr.forEach(([x, y]) => {
      graph[x][y] = 1;
    });

    for (let k = 0; k < M; k++) {
      for (let l = 0; l < N; l++) {
        if (graph[k][l]) {
          bfs([k, l], graph);
          sum += 1;
        }
      }
    }

    answer.push(sum);
  }

  totalCase -= 1;
}

console.log(answer.join('\n'));
