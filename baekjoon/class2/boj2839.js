const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');
const input = file.toString();
const n = +input;

let minCnt = Number.MAX_SAFE_INTEGER;
const cnt5Max = Math.floor(n / 5);
for (let cnt5 = cnt5Max; cnt5 >= 0; cnt5--) {
  if ((n - cnt5 * 5) % 3 === 0) {
    const cnt3 = (n - cnt5 * 5) / 3;
    if (cnt5 + cnt3 < minCnt) minCnt = cnt5 + cnt3;
  }
}

if (minCnt === Number.MAX_SAFE_INTEGER) console.log(-1);
else console.log(minCnt);
