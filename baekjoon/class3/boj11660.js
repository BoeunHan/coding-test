const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');

const input = file.toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1, N + 1).map((s) => s.split(' ').map(Number));
const questions = input.slice(N + 1).map((s) => s.split(' ').map(Number));

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: N + 1 }, () => 0)
);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] =
      board[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
  }
}

const result = [];
for (let i = 0; i < M; i++) {
  const [X1, Y1, X2, Y2] = questions[i];
  let sum = dp[X2][Y2] - dp[X1 - 1][Y2] - dp[X2][Y1 - 1] + dp[X1 - 1][Y1 - 1];
  result.push(sum);
}
console.log(result.join('\n'));
