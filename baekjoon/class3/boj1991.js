const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');

const input = file.toString().trim().split('\n');
const N = Number(input[0]);

const graph = {};

for (const node of input.slice(1)) {
  const [root, left, right] = node.split(' ').map((str) => str.trim());
  graph[root] = [left, right];
}

let result = [];
preOrder('A');
printResult();
result = [];

inOrder('A');
printResult();
result = [];

postOrder('A');
printResult();

function preOrder(cur) {
  if (cur === '.') return;
  result.push(cur);
  preOrder(graph[cur][0]);
  preOrder(graph[cur][1]);
}

function inOrder(cur) {
  if (cur === '.') return;
  inOrder(graph[cur][0]);
  result.push(cur);
  inOrder(graph[cur][1]);
}

function postOrder(cur) {
  if (cur === '.') return;
  postOrder(graph[cur][0]);
  postOrder(graph[cur][1]);
  result.push(cur);
}

function printResult() {
  console.log(result.join(''));
}
