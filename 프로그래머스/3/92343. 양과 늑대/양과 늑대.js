function solution(info, edges) {
  const graph = Array.from({ length: info.length }, () => []);
  for (const [parent, child] of edges) {
    graph[parent].push(child);
  }
    
    console.log('graph: ',graph);

  let maxSheep = 0;

  const dfs = (sheep, wolf, nextNodes) => {
    maxSheep = Math.max(maxSheep, sheep);

    for (let i = 0; i < nextNodes.length; i++) {
      const next = nextNodes[i];
      const nextSheep = sheep + (info[next] === 0 ? 1 : 0);
      const nextWolf = wolf + (info[next] === 1 ? 1 : 0);
      if (nextWolf >= nextSheep) continue; // 늑대 많으면 중단

      const newNodes = nextNodes
        .filter((_, idx) => idx !== i)
        .concat(graph[next]); // 후보 확장
        
        console.log(newNodes);

      dfs(nextSheep, nextWolf, newNodes);
    }
  };

  dfs(1, 0, graph[0]); // 0번 노드는 양
  return maxSheep;
}
