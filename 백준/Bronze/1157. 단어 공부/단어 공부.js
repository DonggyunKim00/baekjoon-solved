const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(str) {
  const upperStrArr = str
    .toUpperCase()
    .split("")
    .map((item) => {
      let tmp = item.charCodeAt(0);
      if (tmp >= 65 && tmp <= 91) return String.fromCharCode(tmp);
    })
    .filter((item) => item !== undefined);
  const obj = {};

  new Set(upperStrArr).forEach((item) => {
    obj[item] = 0;
  });

  upperStrArr.forEach((item) => {
    obj[item] += 1;
  });

  const maxCountStringArr = Object.keys(obj).filter(
    (key) => obj[key] === Math.max(...Object.values(obj))
  );
  if (maxCountStringArr.length < 2) return maxCountStringArr[0];
  else return "?";
}

console.log(solution(input));
