//연속 부분 수열 합의 개수
function solution(elements) {
    const n = elements.length;
    const sum = elements.reduce((cur, sum) => sum + cur, 0);
    const arr = elements.concat(elements.slice(0, elements.length - 1));
    const set = new Set();
    for (i = 0; i < Math.floor(n / 2); i++) {
        for (l = 0, r = i; l < n; l++, r++) {
            const sum2 = arr.slice(l, r + 1).reduce((cur, sum) => sum + cur, 0);
            set.add(sum2);
            set.add(sum - sum2);
        }
    }
    set.add(sum);
    return set.size;
}

function solution2(elements) {
    const arr = elements.concat(elements);
    const set = new Set();
    const total = elements.reduce((cur, sum) => sum + cur, 0);
    const half = Math.floor(elements.length / 2);
    for (i = 0; i < elements.length; i++) {
        let sum = 0;
        for (j = 0; j < half; j++) {
            sum += arr[i + j];
            set.add(sum);
            set.add(total - sum);
        }
    }
    set.add(total);
    return set.size;
}
