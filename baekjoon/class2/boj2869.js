const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');
const [a, b, v] = file.toString().trim().split(' ');
console.log(Math.ceil((v - b) / (a - b)));
