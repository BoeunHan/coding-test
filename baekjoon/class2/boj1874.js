const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');
const input = file.toString().split('\n').map(Number);
const n = input[0];
const numbers = input.slice(1);

const stack = [];
const calc = [];

let cnt = 1;

for (let i = 0; i < n; i++) {
  const cur = numbers[i];
  while (cnt <= cur) {
    stack.push(cnt++);
    calc.push('+');
  }

  if (stack[stack.length - 1] === cur) {
    stack.pop();
    calc.push('-');
  } else {
    console.log('NO');
    return;
  }
}

console.log(calc.join('\n'));
