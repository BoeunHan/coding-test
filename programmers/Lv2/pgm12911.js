//다음 큰 숫자
function solution(n) {
    const cnt = cntOne(n);
    let cur = n + 1;
    while (cntOne(cur) !== cnt) {
        cur++;
    }
    return cur;
}
function cntOne(n) {
    let cnt = 0;
    while (n > 0) {
        if (n % 2 === 1) cnt++;
        n = Math.floor(n / 2);
    }
    return cnt;
}
