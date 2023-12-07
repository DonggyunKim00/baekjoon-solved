const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

for (let i = 1; i <= input[0]; i += 1) {
  const [h, w, n] = input[i].split(" ").map((item) => Number(item));

  const floor = n % h === 0 ? h : (n % h).toString(); // -> 배정될 층 수
  const roomNum = Math.ceil(n / h).toString(); // -> 배정될 호 수
  console.log(floor + roomNum.padStart(2, 0));
}
