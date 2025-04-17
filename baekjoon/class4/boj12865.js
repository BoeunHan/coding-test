const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');

const input = file.toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const weights = [];
const values = [];
for (const obj of input.slice(1)) {
  const [W, V] = obj.split(' ').map(Number);
  weights.push(W);
  values.push(V);
}

const maxValues = Array(K + 1).fill(0);
for (let i = 0; i < N; i++) {
  for (let j = K; j >= weights[i]; j--) {
    maxValues[j] = Math.max(
      maxValues[j - weights[i]] + values[i],
      maxValues[j]
    );
  }
}

console.log(Math.max(...maxValues));
