const fs = require('fs');

const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = fs.readFileSync(filePath, 'utf8').split('\n');
input.shift();

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Analyzer {
  constructor(string) {
    this.log = string.split('');
    this.head = new Node(-1);
    this.cursor = this.head;
  }

  #add(char) {
    const node = new Node(char);
    if (!this.head.next) {
      this.head.next = node;
      node.prev = this.head;
    } else {
      if (this.cursor.next) {
        node.next = this.cursor.next;
        node.prev = this.cursor;
        this.cursor.next.prev = node;
        this.cursor.next = node;
      } else {
        this.cursor.next = node;
        node.prev = this.cursor;
      }
    }

    this.cursor = this.cursor.next;
  }

  #delete() {
    // 초기 헤드 노드만 남았을 경우
    if (this.cursor === this.head) return;

    // 현재 커서가 마지막 노드일 경우
    if (!this.cursor.next) {
      this.cursor.prev.next = null;
    } else {
      this.cursor.next.prev = this.cursor.prev;
      this.cursor.prev.next = this.cursor.next;
    }

    this.cursor = this.cursor.prev;
  }

  #prev() {
    if (!this.cursor.prev) return;
    this.cursor = this.cursor.prev;
  }

  #next() {
    if (!this.cursor.next) return;
    this.cursor = this.cursor.next;
  }

  #methodMapper(method) {
    switch (method) {
      case '>':
        return this.#next();
      case '<':
        return this.#prev();
      case '-':
        return this.#delete();
      default:
        return this.#add(method);
    }
  }

  result() {
    this.log.forEach((method) => {
      this.#methodMapper(method);
    });

    let currNode = this.head.next;
    const string = [];
    while (currNode) {
      string.push(currNode.value);
      currNode = currNode.next;
    }
    return string.join('');
  }
}

const solution = (input) => {
  const answer = [];

  input.forEach((log) => {
    const analyzer = new Analyzer(log);
    answer.push(analyzer.result());
  });

  return answer;
};

console.log(solution(input).join('\n'));
