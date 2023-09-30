//최솟값 만들기
function solution(A, B) {
    const A1 = A.sort((a, b) => a - b);
    const B1 = B.sort((a, b) => b - a);
    let answer = 0;
    for (i = 0; i < A1.length; i++) {
        answer += A1[i] * B1[i];
    }
    return answer;
}
