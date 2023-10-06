//n^2 배열 자르기
function solution(n, left, right) {
    const arr = [];
    for (i = left; i <= right; i++) {
        arr.push(Math.max(Math.floor(i / n), i % n) + 1);
    }
    return arr;
}
