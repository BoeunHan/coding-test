//[1차] 캐시
function solution(cacheSize, cities) {
    let time = 0;
    const cache = [];

    if (cacheSize === 0) return cities.length * 5;

    for (let i = 0; i < cities.length; i++) {
        const city = cities[i].toLowerCase();
        if (cache.indexOf(city) !== -1) {
            //있다면
            cache.splice(cache.indexOf(city), 1);
            time += 1;
        } else {
            //캐시에 없다면
            if (cache.length >= cacheSize) cache.splice(0, 1);
            time += 5;
        }
        cache.push(city);
    }
    return time;
}
