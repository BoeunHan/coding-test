const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');
const [size, ...graphInput] = file.toString().trim().split('\n');
const [n, m] = size.split(' ').map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => false);

const edges = graphInput.map((input) => input.split(' ').map(Number));

for (const [n1, n2] of edges) {
  graph[n1].push(n2);
  graph[n2].push(n1);
}

let cnt = 0;
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    cnt++;
    bfs(i);
  }
}

console.log(cnt);

function bfs(i) {
  const queue = [];
  queue.push(i);

  while (queue.length > 0) {
    const node = queue.shift();
    const nextNodes = graph[node];
    for (const next of nextNodes) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = true;
      }
    }
  }
}
