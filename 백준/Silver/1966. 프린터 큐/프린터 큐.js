const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const [n, ...testcases] = input;

for (let i = 0; i < n; i++) {
  let count = 1;
  let location = Number(testcases[i * 2].split(' ')[1]);
  let queue = testcases[i * 2 + 1].split(' ').map(Number);
  while (true) {
    const Item = queue.shift();
    if (Math.max(...queue) <= Item && location === 0) {
      console.log(count);
      break;
    } else if (Math.max(...queue) > Item && location === 0) {
      queue.push(Item);
      location = queue.length - 1;
    } else if (Math.max(...queue) > Item) {
      queue.push(Item);
      location -= 1;
    } else if (Math.max(...queue) <= Item) {
      count += 1;
      location -= 1;
    }
  }
}
