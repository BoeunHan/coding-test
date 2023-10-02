//점프와 순간 이동
function solution(n) {
    let battery = 0;
    while (n > 0) {
        if (n % 2 === 1) {
            battery++;
            n -= 1;
        } else {
            n /= 2;
        }
    }
    return battery;
}
