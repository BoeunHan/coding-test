const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();
const n = +input;

console.log(findConstructor(n));

function findConstructor(n) {
  const unit = Array.from(String(n)).length;
  let answer = 0;
  for (let i = n - unit * 9; i < n; i++) {
    if (getSplitSum(i) + i === n) {
      answer = i;
      break;
    }
  }
  return answer;
}

function getSplitSum(rawNum) {
  let num = rawNum;
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
