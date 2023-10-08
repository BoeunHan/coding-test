//뉴스 클러스터링
function solution(str1, str2) {
    let arr1 = [];
    let arr2 = [];
    for (i = 0; i < str1.length - 1; i++)
        arr1[i] = str1[i].toUpperCase() + str1[i + 1].toUpperCase();
    for (i = 0; i < str2.length - 1; i++)
        arr2[i] = str2[i].toUpperCase() + str2[i + 1].toUpperCase();

    const regex = /^[A-Z]+$/;
    arr1 = arr1.filter((item) => regex.test(item));
    arr2 = arr2.filter((item) => regex.test(item));

    const map1 = {};
    const map2 = {};

    arr1.forEach((item) => (map1[item] = (map1[item] || 0) + 1));
    arr2.forEach((item) => (map2[item] = (map2[item] || 0) + 1));

    const union = Object.assign({}, map1);
    const inter = {};

    for (let item in map2) {
        if (map1[item]) inter[item] = Math.min(map1[item], map2[item]);
        union[item] = union[item]
            ? Math.max(union[item], map2[item])
            : map2[item];
    }

    const unionCnt = Object.values(union).reduce((cur, sum) => (sum += cur), 0);
    const interCnt = Object.values(inter).reduce((cur, sum) => (sum += cur), 0);

    if (unionCnt === interCnt) return 65536;
    return Math.floor((interCnt / unionCnt) * 65536);
}
