const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');
const [n, numbersInput] = file.toString().trim().split('\n');
const numbers = numbersInput.split(' ').map(Number);

const sorted = [...new Set(numbers)].sort((a, b) => a - b);
const map = new Map();

for (let i = 0; i < sorted.length; i++) {
  map.set(sorted[i], i);
}

const result = numbers.map((n) => map.get(n)).join(' ');
console.log(result);
