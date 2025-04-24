function solution(today, terms, privacies) {
    const answer = [];
    
    const [y,m,d] = today.split('.').map(Number)
    const newTerms = terms.map(item => item.split(' '))
    
    privacies.map((item,idx) => {
        const [storedDate, storedType] = item.split(' ')
        const destroyValue= Number(newTerms.find(([type,value]) => type === storedType)[1])
        
        let [s_y,s_m,s_d] = storedDate.split('.').map(Number);
        s_m += destroyValue;
        
    
        if(s_y*12*28 + s_m*28 +s_d <= y*12*28 + m*28 + d){
            answer.push(idx+1)
        }
           })

    
    return answer;
}