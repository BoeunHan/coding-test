//구명보트
function solution(people, limit) {
    let cnt = 0;

    people = people.sort((a, b) => a - b);

    let l = 0;
    let r = people.length - 1;
    while (l <= r) {
        if (l !== r && people[l] + people[r] <= limit) l++;
        cnt++;
        r--;
    }

    return cnt;
}
