function solution(n, computers) {
  const visited = Array(n).fill(false);
  let stack = [];
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      cnt++;
      stack.push(i);
      connect(i);
      stack = [];
    }
  }

  function connect(idx) {
    visited[idx] = true;
    for (let i = 0; i < n; i++) {
      if (computers[idx][i] === 1 && !stack.includes(i) && i !== idx) {
        stack.push(i);
        connect(i);
      }
    }
  }
  return cnt;
}
