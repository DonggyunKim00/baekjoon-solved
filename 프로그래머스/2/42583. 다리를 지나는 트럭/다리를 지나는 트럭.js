function solution(bridge_length, weight, truck_weights) {
    let answer = 0; // time
    let on_weight = 0; // 다리위의 무게
    
    const bridge = [];
    
    while (bridge.length > 0 || truck_weights.length > 0){
        // 다리 위의 트럭 이동
        for(let i=0; i<bridge.length; i++){
            bridge[i].position += 1;
        }
        
        // 이동한 거리가 다리의 길이보다 크다면 다리를 지난 것
        if(bridge.length > 0 && bridge[0].position > bridge_length){
            const truck = bridge.shift();
            on_weight -= truck.weight;
        }
        
        if(truck_weights.length && on_weight + truck_weights[0] <= weight){
            const truck = {
                position:1,
                weight:truck_weights.shift()
            }
            bridge.push(truck); 
            on_weight += truck.weight;
        }
        
        // 시간 증가
        answer += 1;
    }
    
    
    return answer;
}