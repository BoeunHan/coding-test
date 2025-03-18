const d = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solution(maps) {
  const rowCnt = maps.length;
  const colCnt = maps[0].length;
  let queue = [];
  const visited = Array.from({ length: rowCnt }, () => Array(colCnt).fill(0));

  queue.push({ row: 0, col: 0 });
  visited[0][0] = 1;
  while (true) {
    const pop = queue.splice(0, 1);
    if (pop.length === 0) return -1;

    const { row, col } = pop[0];
    if (row === rowCnt - 1 && col === colCnt - 1) return visited[row][col];

    for (const [drow, dcol] of d) {
      const nextRow = row + drow;
      const nextCol = col + dcol;

      if (
        nextRow >= 0 &&
        nextRow < rowCnt &&
        nextCol >= 0 &&
        nextCol < colCnt &&
        visited[nextRow][nextCol] === 0 &&
        maps[nextRow][nextCol] === 1
      ) {
        visited[nextRow][nextCol] = visited[row][col] + 1;
        queue.push({ row: nextRow, col: nextCol });
      }
    }
  }
}
s;
