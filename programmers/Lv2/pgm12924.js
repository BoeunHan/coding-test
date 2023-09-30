//숫자의 표현
function solution(n) {
    let l = 1;
    let r = 1;
    let cnt = 0;
    while (l <= r && r <= n) {
        const res = ((l + r) * (r - l + 1)) / 2;
        if (res < n) r++;
        else if (res > n) l++;
        else {
            cnt++;
            r++;
        }
    }
    return cnt;
}
