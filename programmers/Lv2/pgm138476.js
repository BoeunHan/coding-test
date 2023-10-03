//귤 고르기
function solution(k, tangerine) {
    const map = new Map();
    for (i = 0; i < tangerine.length; i++) {
        const t = tangerine[i];
        if (map.has(t)) map.set(t, map.get(t) + 1);
        else map.set(t, 1);
    }

    const arr = Array.from(map.values()).sort((a, b) => b - a);

    let cnt = 0;
    let idx = 0;
    while (k > 0) {
        k -= arr[idx];
        cnt++;
        idx++;
    }
    return cnt;
}
