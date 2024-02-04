const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

input.shift();
const testCaseSet = [];
while (input.length > 0) {
  testCaseSet.push(input.splice(0, 2));
}

testCaseSet.forEach((testCase) => {
  const [k, n] = testCase.map((item) => Number(item));

  const apart = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    apart[0][i] = i;
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      apart[i][j] = apart[i - 1][j] + apart[i][j - 1];
    }
  }

  console.log(apart[k][n]);
});
