const [dx,dy] = [
    [1,-1,0,0],
    [0,0,1,-1]
];

function solution(maps) {
    const n = maps.length
    const m = maps[0].length
    let memo = Array.from({length:n},() => Array.from({length:m},() => 0));
    
    const queue = [[0,0]];
    memo[0][0] = 1;
    
    let head = 0;
    while(queue.length > head){
        const [prev_x,prev_y] = queue[head++];
        
        for(let i=0; i<4; i++){
            const mx = prev_x + dx[i];
            const my = prev_y + dy[i];
            
            if(mx<0 || my <0 || mx >= n || my >= m) continue;
            if(!maps[mx][my] || memo[mx][my]) continue;
            
            queue.push([mx,my]);
            memo[mx][my] = memo[prev_x][prev_y] + 1;
        }
    }
    
    return memo[n-1][m-1] || -1;
}