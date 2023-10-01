//짝지어 제거하기
function solution(str) {
    const stack = [];
    for (let i of str) {
        if (stack[stack.length - 1] === i) {
            stack.pop();
        } else {
            stack.push(i);
        }
    }
    return stack.length === 0 ? 1 : 0;
}
