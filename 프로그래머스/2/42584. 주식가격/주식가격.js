function solution(prices) {
    let answer = Array(prices.length).fill(0);
    
    let top = 0;
    let count = 0;
    
    for(let i = 0; i<prices.length; i++){        
        for(let j = i+1; j<prices.length; j++){
            count+=1;
            if(prices[i] > prices[j]) break;
        }
        
        answer[i] = count;
        count = 0;
    }
    
    return answer;
}