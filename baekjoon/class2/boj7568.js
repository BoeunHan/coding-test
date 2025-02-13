const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');
const input = file.toString().trim().split('\n');
const n = +input[0];
const people = [];

for (let i = 0; i < n; i++) {
  const [x, y] = input[i + 1].split(' ').map(Number);
  people.push({ x, y });
}

const rank = people.map((body) => {
  return people.filter(({ x, y }) => x > body.x && y > body.y).length + 1;
});

console.log(rank.join(' '));
