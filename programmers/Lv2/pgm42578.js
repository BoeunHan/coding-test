//의상
function solution(clothes) {
    const map = new Map();
    for (let i = 0; i < clothes.length; i++) {
        const type = clothes[i][1];
        if (map.has(type)) map.set(type, map.get(type) + 1);
        else map.set(type, 1);
    }

    let answer = 1;
    for (let [key, value] of map) {
        answer *= value + 1;
    }

    return answer - 1;
}
