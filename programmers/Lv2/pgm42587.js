//프로세스
function solution(priorities, location) {
    const process = priorities.map((p, idx) => ({ idx, priorities: p }));

    const stack = [];
    while (process.length !== 0) {
        const p1 = process.shift();
        if (process.filter((p) => p.priorities > p1.priorities).length === 0)
            stack.push(p1);
        else process.push(p1);
    }

    return stack.findIndex((p) => p.idx === location) + 1;
}

function solution2(priorities, location) {
    const process = priorities.map((p, idx) => ({ idx, priorities: p }));

    const stack = [];
    while (process.length !== 0) {
        const p1 = process.shift();
        if (process.every((p) => p.priorities <= p1.priorities)) {
            stack.push(p1);
            if (p1.idx === location) return stack.length;
        } else {
            process.push(p1);
        }
    }
}
