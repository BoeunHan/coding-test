const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');
const [size, ...boardInput] = file.toString().trim().split('\n');

const d = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const [n, m] = size.split(' ').map(Number);
const board = boardInput.map((line) => line.split(' ').map(Number));

let pivotRow = 0;
let pivotCol = 0;
const distance = Array.from({ length: n }, (_, rowIdx) =>
  Array.from({ length: m }, (_, colIdx) => {
    if (board[rowIdx][colIdx] === 2) {
      pivotRow = rowIdx;
      pivotCol = colIdx;
      return 0;
    }
    return board[rowIdx][colIdx] === 0 ? 0 : -1;
  })
);

const queue = [];

queue.push(pivotRow);
queue.push(pivotCol);

while (queue.length > 0) {
  const row = queue.shift();
  const col = queue.shift();

  for ([x, y] of d) {
    const nextRow = row + x;
    const nextCol = col + y;
    if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= m) continue;
    if (distance[nextRow][nextCol] >= 0) continue;

    distance[nextRow][nextCol] = distance[row][col] + 1;
    queue.push(nextRow);
    queue.push(nextCol);
  }
}

printBoard(distance);

function printBoard(board) {
  for (let i = 0; i < n; i++) {
    console.log(board[i].join(' '));
  }
}
