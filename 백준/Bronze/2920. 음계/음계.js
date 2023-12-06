const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

function solution(input) {
  const playlist = input.split(" ").map((item) => parseInt(item));

  if (
    playlist.every((item, idx) => {
      return item === idx + 1;
    })
  )
    return "ascending";
  else if (
    playlist.every((item, idx, arr) => {
      return arr.length - item === idx;
    })
  )
    return "descending";
  else {
    return "mixed";
  }
}

console.log(solution(input));
