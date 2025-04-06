const fs = require('fs');
const file =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync('input.txt');

class Heap {
  array = [0];

  push(value) {
    this.array.push(value);
    let curIndex = this.array.length - 1;

    let parentIndex = Math.floor(curIndex / 2);
    while (this.array[parentIndex] > this.array[curIndex]) {
      [this.array[parentIndex], this.array[curIndex]] = [
        this.array[curIndex],
        this.array[parentIndex],
      ];
      curIndex = parentIndex;
      parentIndex = Math.floor(curIndex / 2);
    }
  }

  pop() {
    if (this.array.length === 1) return 0;
    const min = this.array[1];

    let curIndex = 1;
    const last = this.array.pop();
    if (this.array.length === 1) return min;
    this.array[1] = last;

    while (true) {
      let leftIndex =
        curIndex * 2 > this.array.length - 1 ? undefined : curIndex * 2;
      let rightIndex =
        curIndex * 2 + 1 > this.array.length - 1 ? undefined : curIndex * 2 + 1;

      if (
        leftIndex &&
        rightIndex &&
        this.array[leftIndex] < this.array[curIndex] &&
        this.array[rightIndex] < this.array[curIndex]
      ) {
        if (this.array[leftIndex] < this.array[rightIndex]) {
          [this.array[leftIndex], this.array[curIndex]] = [
            this.array[curIndex],
            this.array[leftIndex],
          ];
          curIndex = leftIndex;
        } else {
          [this.array[rightIndex], this.array[curIndex]] = [
            this.array[curIndex],
            this.array[rightIndex],
          ];
          curIndex = rightIndex;
        }
      } else if (leftIndex && this.array[leftIndex] < this.array[curIndex]) {
        [this.array[leftIndex], this.array[curIndex]] = [
          this.array[curIndex],
          this.array[leftIndex],
        ];
        curIndex = leftIndex;
      } else if (rightIndex && this.array[rightIndex] < this.array[curIndex]) {
        [this.array[rightIndex], this.array[curIndex]] = [
          this.array[curIndex],
          this.array[rightIndex],
        ];
        curIndex = rightIndex;
      } else {
        break;
      }
    }

    return min;
  }
}

const [n, ...numbers] = file.toString().trim().split('\n').map(Number);

const heap = new Heap();
const result = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) result.push(heap.pop());
  else heap.push(numbers[i]);
}

console.log(result.join('\n'));
