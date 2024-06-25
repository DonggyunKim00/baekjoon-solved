const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item, idx) => {
    if (idx === 0 || idx === 1) return Number(item);
    else return item.split(' ').map((item) => Number(item));
  });

const [total, connect] = input;

let answer = [];
let visited = Array(total + 1).fill(false);
let graph = Array.from(Array(total + 1)).map(() => []);

for (let i = 2; i < connect + 2; i++) {
  const [from, to] = input[i];
  graph[from].push(to);
  graph[to].push(from);
}

const bfs = (worm) => {
  const queue = [worm];
  while (queue.length > 0) {
    const parent = queue.shift();
    if (!visited[parent]) {
      visited[parent] = true;
      answer.push(parent);
      queue.push(...graph[parent]);
    }
  }
};

bfs(1);
console.log(answer.length - 1);
