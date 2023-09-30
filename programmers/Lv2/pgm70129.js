//이진 변환 반복하기
function solution(s) {
    let s1 = s.split("").map((n) => +n);
    let cnt = 0;
    let zero = 0;
    while (!(s1.length === 1 && s1[0] === 1)) {
        let len = s1.filter((n) => n === 1).length;
        zero += s1.length - len;
        cnt++;
        const s2 = [];
        while (len > 0) {
            s2.unshift(len % 2);
            len = Math.floor(len / 2);
        }
        s1 = s2;
    }
    return [cnt, zero];
}
