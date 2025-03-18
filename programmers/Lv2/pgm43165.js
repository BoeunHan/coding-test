function solution(numbers, target) {
  function dfs(depth, sum) {
    if (depth === numbers.length) {
      return sum === target ? 1 : 0;
    }
    return (
      dfs(depth + 1, sum + numbers[depth]) +
      dfs(depth + 1, sum - numbers[depth])
    );
  }

  return dfs(0, 0);
}
