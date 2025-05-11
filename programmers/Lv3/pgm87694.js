function solution(rectangle, characterX, characterY, itemX, itemY) {
  const MAP_X = 50;
  const MAP_Y = 50;

  const map = Array.from({ length: MAP_X * 2 + 1 }, () =>
    Array(MAP_Y * 2 + 1).fill(0)
  );
  const visited = Array.from({ length: MAP_X * 2 + 1 }, () =>
    Array(MAP_Y * 2 + 1).fill(0)
  );

  for (const [minX, minY, maxX, maxY] of rectangle) {
    for (let x = minX * 2; x <= maxX * 2; x++) {
      for (let y = minY * 2; y <= maxY * 2; y++) {
        map[x][y] = 1;
      }
    }
  }

  for (const [minX, minY, maxX, maxY] of rectangle) {
    for (let x = minX * 2 + 1; x <= maxX * 2 - 1; x++) {
      for (let y = minY * 2 + 1; y <= maxY * 2 - 1; y++) {
        map[x][y] = 0;
      }
    }
  }

  const d = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const queue = [];
  queue.push(characterX * 2, characterY * 2);

  while (queue.length > 0) {
    const x = queue.shift();
    const y = queue.shift();
    if (x === itemX * 2 && y === itemY * 2) {
      return visited[x][y] / 2;
    }

    for (const [dx, dy] of d) {
      const nextX = x + dx;
      const nextY = y + dy;

      if (nextX < 0 || nextX > MAP_X * 2) continue;
      if (nextY < 0 || nextY > MAP_Y * 2) continue;
      if (map[nextX][nextY] === 0) continue; //갈 수 없는 길이면 패스
      if (visited[nextX][nextY] > 0) continue; //이미 방문한 길이면 패스

      visited[nextX][nextY] = visited[x][y] + 1;
      queue.push(nextX);
      queue.push(nextY);
    }
  }
}
