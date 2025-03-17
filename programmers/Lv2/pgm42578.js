//의상
function solution(clothes) {
  const map = {};

  for (const [name, type] of clothes) {
    const prevList = map[type] || [];

    map[type] = [...prevList, name];
  }

  let answer = 1;

  for (const [type, list] of Object.entries(map)) {
    answer *= list.length + 1;
  }

  return answer - 1;
}
