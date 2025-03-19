function solution(prices) {
  const n = prices.length;
  const stack = [];
  const answer = Array(n).fill(0);

  stack.push(0);

  for (let i = 1; i < n; i++) {
    while (stack.length > 0 && prices[peek(stack)] > prices[i]) {
      const idx = stack.pop();
      answer[idx] = i - idx;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const idx = stack.pop();
    answer[idx] = n - 1 - idx;
  }
  return answer;
}

function peek(stack) {
  return stack[stack.length - 1];
}
