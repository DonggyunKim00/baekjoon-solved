function solution(queue1, queue2) {
    const arr = [...queue1, ...queue2];
    const total = arr.reduce((a,b)=>a+b, 0);
    if (total % 2 !== 0) return -1;

    const target = total / 2;
    let sum1 = queue1.reduce((a,b)=>a+b, 0);

    let i = 0;
    let j = queue1.length;
    let moves = 0;
    const maxOps = queue1.length * 3;

    while (moves <= maxOps) {
        if (sum1 === target) return moves;

        if (sum1 < target) {
            sum1 += arr[j++];
        } else {
            sum1 -= arr[i++];
        }
        moves++;
    }
    return -1;
}
