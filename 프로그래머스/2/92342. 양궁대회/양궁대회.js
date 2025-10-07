const calcScore = (arrA, arrL) => {
  const obj = { A: 0, L: 0 };
  for (let i = 0; i < 11; i++) {
    if (arrA[i] === 0 && arrL[i] === 0) continue;
    if (arrA[i] >= arrL[i]) obj.A += 10 - i;
    else obj.L += 10 - i;
  }
  return obj.L - obj.A; // 점수차 (라이언 - 어피치)
};

function better(arrA, arrL) {
  for (let i = 10; i >= 0; i--) {
    if (arrA[i] < arrL[i]) return true; // 낮은 점수에서 더 많이 맞힌 쪽
    else if (arrA[i] > arrL[i]) return false;
  }
  return false;
}

function dfs(idx, arrows, ryan, info, result) {
  if (idx === 11 || arrows === 0) {
    if (arrows > 0) ryan[10] += arrows;

    const diff = calcScore(info, ryan);
    if (diff > 0 && (diff > result.maxDiff || (diff === result.maxDiff && better(result.best, ryan)))) {
      result.maxDiff = diff;
      result.best = [...ryan];
    }

    if (arrows > 0) ryan[10] -= arrows; // 복원
    return;
  }

  // 이 점수 이기기
  const need = info[idx] + 1;
  if (arrows >= need) {
    ryan[idx] = need;
    dfs(idx + 1, arrows - need, ryan, info, result);
    ryan[idx] = 0; // 복원
  }

  // 이 점수 포기
  dfs(idx + 1, arrows, ryan, info, result);
}

function solution(n, info) {
  const result = { maxDiff: 0, best: Array(11).fill(0) };
  const ryan = Array(11).fill(0);
  dfs(0, n, ryan, info, result);
  return result.maxDiff === 0 ? [-1] : result.best;
}
