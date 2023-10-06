//괄호 회전하기
function solution(s) {
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (check(s)) cnt++;
        s = s.slice(1) + s[0];
    }
    return cnt;
}

function check(s) {
    const stack = [];
    let correct = true;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) {
                correct = false;
                break;
            }
            const pop = stack.pop();
            if (
                !(
                    (pop === "(" && s[i] === ")") ||
                    (pop === "{" && s[i] === "}") ||
                    (pop === "[" && s[i] === "]")
                )
            ) {
                correct = false;
                break;
            }
        }
    }
    if (stack.length !== 0) correct = false;

    return correct;
}
