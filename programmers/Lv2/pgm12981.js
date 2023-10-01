//영어 끝말잇기
function solution(n, words) {
    const set = new Set();
    let i;
    let fail = false;
    for (i = 0; i < words.length; i++) {
        if (
            set.has(words[i]) ||
            (i !== 0 && words[i][0] !== words[i - 1][words[i - 1].length - 1])
        ) {
            fail = true;
            break;
        } else set.add(words[i]);
    }

    if (fail) return [(i % n) + 1, Math.floor(i / n) + 1];
    else return [0, 0];
}
