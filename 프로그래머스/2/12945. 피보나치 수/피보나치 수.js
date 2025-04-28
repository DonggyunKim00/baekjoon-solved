function solution(n) {
    let store = Array(n+1).fill(0);
    store[0] = 0, store[1] = 1;
    
    for(let i=2; i<=n; i++){
        store[i] = (store[i-1] + store[i-2]) % 1234567;
    }
    
    return store[n];
}