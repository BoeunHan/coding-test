const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');
const input = file.toString();
const n = +input;

let cnt = 0;

cnt += Math.floor(n / 5);
cnt += Math.floor(n / 25);
cnt += Math.floor(n / 125);

console.log(cnt);

//10이 될때마다 나눠주면 되는줄 알았는데 더쉬운 방법 있음!
//5가 생길때마다 0이 하나씩 늘어나므로 5가 등장하는 횟수를 세어주면 됨
//5의 등장횟수가 2의 등장횟수(짝수)보다 적으므로 5만 세어주면 됨
//5의 배수 한번
//25의 배수 2번
//125의 배수 3번
