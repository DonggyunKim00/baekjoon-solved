const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split(" ");

const [x, y] = input;

const [xDiviser, yDiviser] = [[], []];
for (let i = 1; i <= x; i += 1) {
  if (x % i === 0) {
    xDiviser.push(i);
  }
}
for (let i = 1; i <= x; i += 1) {
  if (y % i === 0) {
    yDiviser.push(i);
  }
}

const gcd = Math.max(...xDiviser.filter((x) => yDiviser.includes(x)));
const lcm = (x * y) / gcd;
console.log(gcd);
console.log(lcm);
