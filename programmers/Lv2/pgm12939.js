//최댓값과 최솟값
function solution(s) {
    const num = s.split(" ").map((n) => +n);
    return Math.min(...num) + " " + Math.max(...num);
}
