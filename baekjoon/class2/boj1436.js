const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');
const input = file.toString().trim();
const n = +input;

let cnt = 0;
let i;
for (i = 0; ; i++) {
  if (String(i).includes('666')) cnt++;
  if (cnt === n) break;
}
console.log(i);
