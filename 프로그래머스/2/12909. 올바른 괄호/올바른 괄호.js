const GWALHO = '()';

function solution(s){
    const arr = [];
    
    for(let i=0; i<s.length; i++){
        if(i === 0){
            arr.push(s[i]);
        }
        if(i > 0){
            const top = arr[arr.length-1];
            
            if(top + s[i] === GWALHO){
                arr.pop();
            }else{
                arr.push(s[i]);
            }
        }
    }
    
    return !arr.length;
}