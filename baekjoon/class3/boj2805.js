const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');

const [cntInput, treeInput] = file.toString().trim().split('\n');

const [n, m] = cntInput.split(' ').map(Number);
const trees = treeInput
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let end = trees[trees.length - 1] - 1;

let answer = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  const sum = cutTrees(mid);

  if (sum >= m) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);

function cutTrees(height) {
  let sum = 0;
  for (const tree of trees) {
    if (tree > height) sum += tree - height;
  }
  return sum;
}
