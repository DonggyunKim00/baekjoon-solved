const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const newInput = input.slice(1).map((item) => item.split(" "));

class Deque {
  constructor() {
    this.list = [];
  }

  push_front(x) {
    this.list.splice(0, 0, Number(x));
  }
  push_back(x) {
    this.list.push(Number(x));
  }

  pop_front() {
    const shiftNum = this.list.shift();
    return shiftNum ? shiftNum : -1;
  }
  pop_back() {
    const popNum = this.list.pop();
    return popNum ? popNum : -1;
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

const deque = new Deque();
const answer = [];
newInput.forEach((item) => {
  const [method, num] = item;
  if (method === "push_front") deque.push_front(num);
  else if (method === "push_back") deque.push_back(num);
  else if (method === "pop_front") answer.push(deque.pop_front());
  else if (method === "pop_back") answer.push(deque.pop_back());
  else if (method === "size") answer.push(deque.size());
  else if (method === "empty") answer.push(deque.empty());
  else if (method === "front") answer.push(deque.front());
  else if (method === "back") answer.push(deque.back());
});

console.log(answer.join("\n"));
