const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');
const input = file.toString().trim().split('\n');
console.log(input);
let idx = 0;
let n;
for (idx = 0; idx < input.length; idx++) {
  if (!Number.isNaN(Number(input[idx]))) {
    n = Number(input[idx]);
    break;
  }
}

n += 3 - idx;

let answer = '';
if (n % 3 === 0) answer += 'Fizz';
if (n % 5 === 0) answer += 'Buzz';
console.log(answer === '' ? n : answer);
