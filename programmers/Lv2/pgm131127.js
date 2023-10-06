//할인 행사
function solution(want, number, discount) {
    const wants = new Map();
    for (let i = 0; i < want.length; i++) {
        wants.set(want[i], number[i]);
    }

    let cnt = 0;
    let left = 0;
    let right = 10;
    const map = new Map();

    for (let i = left; i < right; i++) {
        if (map.has(discount[i]))
            map.set(discount[i], map.get(discount[i]) + 1);
        else map.set(discount[i], 1);
    }
    if (isSame(wants, map)) cnt++;

    while (right < discount.length) {
        map.set(discount[left], map.get(discount[left]) - 1);
        if (map.get(discount[left]) === 0) map.delete(discount[left]);
        left++;
        right++;
        if (map.has(discount[right - 1]))
            map.set(discount[right - 1], map.get(discount[right - 1]) + 1);
        else map.set(discount[right - 1], 1);

        if (isSame(wants, map)) cnt++;
    }
    return cnt;
}
function isSame(map, map2) {
    for (const [key, value] of map) {
        if (!map2.has(key)) return false;
        if (map2.get(key) !== value) return false;
    }
    return true;
}

function solution2(want, number, discount) {
    let cnt = 0;
    for (let i = 0; i < discount.length - 9; i++) {
        const slice = discount.slice(i, i + 10);
        let signup = true;
        for (let j = 0; j < want.length; j++) {
            if (slice.filter((item) => item === want[j]).length !== number[j]) {
                signup = false;
                break;
            }
        }
        if (signup) cnt++;
    }
    return cnt;
}
