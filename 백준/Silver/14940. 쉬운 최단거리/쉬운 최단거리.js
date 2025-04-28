const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((row) => row.split(' ').map(Number));

const [dx, dy] = [
  [1, -1, 0, 0],
  [0, 0, 1, -1],
];

const bfs = () => {
  let start;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 2) {
        start = [i, j];
      }
    }
  }

  const [startX, startY] = start;
  const visited = Array.from({ length: n }, () => Array(m).fill(-1));
  const queue = [[startX, startY, 0]];
  visited[startX][startY] = 0;

  while (queue.length) {
    const [prev_x, prev_y, cnt] = queue.shift();

    for (let dir = 0; dir < 4; dir++) {
      const mx = prev_x + dx[dir];
      const my = prev_y + dy[dir];

      if (mx < 0 || my < 0 || mx >= n || my >= m) continue;
      if (graph[mx][my] === 0 || visited[mx][my] !== -1) continue;
      visited[mx][my] = cnt + 1;
      queue.push([mx, my, cnt + 1]);
    }
  }

  return visited
    .map((row, i) =>
      row
        .map((cell, j) => {
          if (graph[i][j] === 0) return 0;
          if (cell === -1) return -1;
          return cell;
        })
        .join(' ')
    )
    .join('\n');
};

console.log(bfs());
