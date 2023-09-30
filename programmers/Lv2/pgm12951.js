//JadenCase 문자열 만들기
function solution(s) {
    let answer = "";
    for (i = 0; i < s.length; i++) {
        if (s[i] !== " " && (s[i - 1] === " " || i === 0))
            answer += s[i].toUpperCase();
        else if (s[i] !== " " && s[i - 1] !== " ") answer += s[i].toLowerCase();
        else answer += s[i];
    }
    return answer;
}
