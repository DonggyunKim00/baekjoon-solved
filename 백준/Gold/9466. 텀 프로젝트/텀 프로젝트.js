const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

// 최적화된 BFS 함수
const bfs = (arr, visited) => {
  let teamMemberCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue; // 이미 방문한 학생은 무시
    const start = i;
    let current = i;
    let path = [];

    // 팀을 이루는지 확인하는 탐색
    while (!visited[current]) {
      visited[current] = true;
      path.push(current);
      current = arr[current] - 1; // 선택된 학생으로 이동
    }

    // 사이클이 형성되었을 때만 팀원으로 처리
    if (path.includes(current)) {
      teamMemberCount += path.length - path.indexOf(current);
    }
  }

  return teamMemberCount;
};

const solution = (T, cases) => {
  const answer = [];

  for (let i = 0; i < T; i++) {
    const n = Number(cases[i * 2]);
    const arr = cases[i * 2 + 1].split(' ').map(Number);

    let visited = Array(n).fill(false); // 방문 여부 기록 배열

    // 팀에 속한 학생들의 수를 구함
    const teamMemberCount = bfs(arr, visited);

    // 팀에 속하지 않은 학생들의 수를 저장
    answer.push(n - teamMemberCount);
  }

  return answer.join('\n');
};

const [T, ...cases] = input;
const answer = solution(Number(T), cases);
console.log(answer);
