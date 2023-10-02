//예상 대진표
function solution(n, a, b) {
    if (a > b) [a, b] = [b - 1, a - 1];
    else [a, b] = [a - 1, b - 1];

    let turn = 0;
    while (true) {
        turn++;
        if (a % 2 === 0 && b - a === 1) break;
        a = Math.floor(a / 2);
        b = Math.floor(b / 2);
    }
    return turn;
}
