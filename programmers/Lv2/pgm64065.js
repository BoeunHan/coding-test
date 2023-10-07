//튜플
function solution(str) {
    let arr = str.slice(1, str.length - 1).split("},{");
    arr = arr.map((s, idx) => {
        let s1 = s;
        if (idx === 0) s1 = s1.slice(1);
        if (idx === arr.length - 1) s1 = s1.slice(0, s1.length - 1);
        return s1.split(",").map((s) => +s);
    });

    arr.sort((a, b) => a.length - b.length);

    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        answer.push(arr[i].filter((n) => !answer.includes(n))[0]);
    }

    return answer;
}
