//기능개발
function solution(progresses, speeds) {
    let days = [];
    for (let i = 0; i < progresses.length; i++) {
        days[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }
    const answer = [];

    while (days.length !== 0) {
        let idx = 0;
        const day = days[0];
        while (idx < days.length && days[idx] <= day) {
            idx++;
        }
        days = days.slice(idx);
        answer.push(idx);
    }

    return answer;
}
