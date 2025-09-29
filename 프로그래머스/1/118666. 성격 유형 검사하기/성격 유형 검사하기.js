function solution(survey, choices) {
    const map = new Map()
    
    for(let i=0; i<survey.length; i++){
        const [first,second] = survey[i].split('');
        const value = choices[i] - 4;
        
        if(value < 0){
            map.set(first, (map.get(first) || 0) + Math.abs(value));
        } else if(value > 0) {
            map.set(second, (map.get(second) || 0) + value);
        }
        
    }
    
    const TYPES = [['R','T'],['C','F'],['J','M'],['A','N']];
    const answer = [];
    
    
    for(let i=0; i<4; i++){
        const [first,second] = TYPES[i];
        
        if((map.get(first) || 0) >= (map.get(second) || 0)){
            answer.push(first);
        }else{
            answer.push(second);
        }
    }
    
    return answer.join('');
}