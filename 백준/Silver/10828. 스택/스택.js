const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const newInput = input.slice(1).map((item) => item.split(" "));

class Stack {
  constructor() {
    this.list = [];
  }

  push(x) {
    this.list.push(Number(x));
  }

  pop() {
    const popNum = this.list.pop();
    return popNum ? popNum : -1;
  }

  size() {
    return this.list.length;
  }

  empty() {
    return this.list.length ? 0 : 1;
  }

  top() {
    return this.list[0] ? this.list[this.list.length - 1] : -1;
  }
}

const stack = new Stack();
const answer = [];
newInput.forEach((item) => {
  const [method, num] = item;
  if (method === "push") stack.push(num);
  else if (method === "pop") answer.push(stack.pop());
  else if (method === "size") answer.push(stack.size());
  else if (method === "empty") answer.push(stack.empty());
  else if (method === "top") answer.push(stack.top());
});

console.log(answer.join("\n"));
