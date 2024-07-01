const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const N = input.shift();

class MinHeap {
  constructor() {
    this.heap = [];
    this.answer = [];
  }

  push(num) {
    this.heap.push(num);
    this.upHeap();
  }

  upHeap() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  delete() {
    if (this.isEmpty()) return null;

    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.downHeap();
    }
    this.downHeap();
  }

  downHeap() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      this.swap(smallest, index);
      index = smallest;
    }
  }

  addAnswer() {
    this.answer.push(this.heap[0] || 0);
  }

  swap(a, b) {
    let swap = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = swap;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const mh = new MinHeap();
for (let i = 0; i < N; i++) {
  if (input[i]) {
    mh.push(input[i]);
  } else {
    mh.addAnswer();
    mh.delete();
  }
}

console.log(mh.answer.join('\n'));
