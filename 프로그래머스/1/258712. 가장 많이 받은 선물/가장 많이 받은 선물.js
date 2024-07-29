
const makeGraph = (friends, gifts) => {
  const result = {};

  friends.forEach((friend) => {
    result[friend] = {};
    friends.forEach((innerFriend) => {
      if (innerFriend !== friend) result[friend][innerFriend] = 0;
    });

    result[friend]['giftValue'] = 0;
    result[friend]['mustReceive'] = 0;
  });

  for (let i = 0; i < gifts.length; i++) {
    const [sender, recipient] = gifts[i].split(' ');
    result[sender][recipient] += 1;

    result[sender]['giftValue'] += 1;
    result[recipient]['giftValue'] -= 1;
  }

  return result;
};

function solution(friends, gifts) {
  const graph = makeGraph(friends, gifts);

  for (const key in graph) {
    const innerObj = graph[key];
    for (const innerKey in innerObj) {
      if (graph[innerKey]) {
        if (graph[key][innerKey] > graph[innerKey][key]) {
          graph[key]['mustReceive']++;
          delete graph[key][innerKey];
          delete graph[innerKey][key];
        } else if (graph[key][innerKey] === graph[innerKey][key]) {
          if (graph[key]['giftValue'] > graph[innerKey]['giftValue'])
            graph[key]['mustReceive']++;
          else if (graph[key]['giftValue'] < graph[innerKey]['giftValue'])
            graph[innerKey]['mustReceive']++;
          delete graph[key][innerKey];
          delete graph[innerKey][key];
        }
      }
    }
  }

  const answer = [];
  for (const key in graph) {
    answer.push(graph[key]['mustReceive']);
  }

  return Math.max(...answer);
}