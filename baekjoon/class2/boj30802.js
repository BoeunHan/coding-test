const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');
const input = file.toString().trim().split('\n');
const n = +input[0];
const tshirts = input[1].split(' ').map(Number);
const [t, p] = input[2].split(' ').map(Number);

const tGroupCount = tshirts.reduce(
  (acc, cur) => (acc += Math.ceil(cur / t)),
  0
);
const pGroupCount = Math.floor(n / p);
const pSingleCount = n % p;

console.log(tGroupCount);
console.log(pGroupCount, pSingleCount);
