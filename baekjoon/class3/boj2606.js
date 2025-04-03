const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');
const [n, m, ...graphInput] = file.toString().trim().split('\n');

const visited = Array.from({ length: Number(n) + 1 }, () => false);
const graph = Array.from({ length: Number(n) + 1 }, () => []);
const edges = graphInput.map((input) => input.split(' ').map(Number));

for (const [n1, n2] of edges) {
  graph[n1].push(n2);
  graph[n2].push(n1);
}

const queue = [1];
visited[1] = true;

while (queue.length > 0) {
  const n = queue.shift();
  const nextNodes = graph[n];
  for (const nextNode of nextNodes) {
    if (!visited[nextNode]) {
      visited[nextNode] = true;
      queue.push(nextNode);
    }
  }
}

const virus = visited.filter(Boolean).length - 1;
console.log(virus);
