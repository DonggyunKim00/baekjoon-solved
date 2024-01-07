const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(fs.readFileSync(filePath, "utf8").toString().trim());

class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addNodeLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  deleteHead() {
    if (this.head === null) {
      return;
    }
    if (this.head.next !== null) {
      this.head.next.prev = null;
    }
    this.head = this.head.next;
    this.length--;
  }
  getHead() {
    return this.head.data;
  }
  getSize() {
    return this.length;
  }
}

const logic = () => {
  const linkedList = new LinkedList();

  for (let i = 1; i <= input; i++) {
    linkedList.addNodeLast(i);
  }
  while (linkedList.getSize() > 1) {
    linkedList.deleteHead();
    const head = linkedList.getHead();
    linkedList.deleteHead();

    linkedList.addNodeLast(head);
  }

  console.log(linkedList.getHead());
};

logic();
