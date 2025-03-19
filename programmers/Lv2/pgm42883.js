function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] < number[i] && k > 0) {
      stack.pop();
      k -= 1;
    }

    stack.push(number[i]);
  }
  return stack.slice(0, number.length - k).join('');
}
