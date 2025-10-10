function solution(id_list, report, k) {
    // 초기 설정
    const userList = {};
    
    id_list.forEach(name => {
        userList[name] =  {
            reportIds: new Set(), // 신고 한 유저
            reportCnt: 0, // 신고 당한 횟수
        };
    })
    
    report.map(v => v.split(' ')).forEach(([user,reportUser]) => {
        if(!userList[user].reportIds.has(reportUser)){
            userList[user].reportIds.add(reportUser);
            userList[reportUser].reportCnt += 1;
        }
    })
        
    const answer = Object.values(userList).map(({reportIds, reportCnt}) => {
        let mailCnt = 0;
        reportIds.forEach(user => {
            if(userList[user].reportCnt >= k) mailCnt += 1;
        })
        
        return mailCnt;
    })
    
    return answer;
}