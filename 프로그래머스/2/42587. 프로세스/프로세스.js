function solution(priorities, location) {
    let answer = 0;
    
    const queue = priorities.map((item,idx) => ({priority:item, idx}));
    
    
    while(true){
        const max = Math.max(...queue.map(item => item.priority));
        
        const node = queue.shift();
        if(max !== node.priority){
            queue.push(node);
        }else {
            answer +=1;
            
        if(node.idx === location){
            break;
        }
        }
        
    }
    
    
    return answer;
}