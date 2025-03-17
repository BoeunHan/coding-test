// 전화번호 목록
function solution(phone_book) {
  const phoneList = phone_book.sort();
  let answer = true;
  for (let i = 1; i < phoneList.length; i++) {
    if (phoneList[i].startsWith(phoneList[i - 1])) {
      answer = false;
      break;
    }
  }

  return answer;
}
