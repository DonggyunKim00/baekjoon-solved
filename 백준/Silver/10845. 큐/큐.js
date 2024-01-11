const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const newInput = input.slice(1).map((item) => item.split(" "));

class Queue {
  constructor() {
    this.list = [];
  }

  push(x) {
    this.list.push(Number(x));
  }

  pop() {
    const shiftNum = this.list.shift();
    return shiftNum ? shiftNum : -1;
  }

  size() {
    return this.list.length;
  }

  empty() {
    return this.list.length ? 0 : 1;
  }

  front() {
    return this.list[0] ? this.list[0] : -1;
  }

  back() {
    return this.list[0] ? this.list[this.list.length - 1] : -1;
  }
}

const queue = new Queue();
const answer = [];
newInput.forEach((item) => {
  const [method, num] = item;
  if (method === "push") queue.push(num);
  else if (method === "pop") answer.push(queue.pop());
  else if (method === "size") answer.push(queue.size());
  else if (method === "empty") answer.push(queue.empty());
  else if (method === "front") answer.push(queue.front());
  else if (method === "back") answer.push(queue.back());
});

console.log(answer.join("\n"));
