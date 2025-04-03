const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');
const [n, timeInput] = file.toString().trim().split('\n');
const times = timeInput
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const sum = Array.from({ length: n }, () => 0);
for (let i = 0; i < n; i++) {
  if (i === 0) sum[0] = times[0];
  else sum[i] = sum[i - 1] + times[i];
}

const total = sum.reduce((acc, cur) => acc + cur, 0);
console.log(total);
