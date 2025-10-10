function isPrime(N){
    if(N === 0 || N === 1) return false;
    for(let i=2; i<=Math.sqrt(N); i++){
        if(N % i === 0) return false
    }
    
    return true;
}

function solution(n, k) {
    let cnt = 0;
    
    const trans = n.toString(k).split('0');
    
    trans.forEach(num => {
        if(isPrime(Number(num))) cnt += 1;
    })
    
    return cnt;
}