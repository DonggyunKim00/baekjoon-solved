const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const [h, w] = input[0].split(" ");
const board = input.slice(1);
let count = 0;

const changeBlock = (splitSliceBoard) => {
  for (let k = 0; k < 8 - 1; k++) {
    for (let l = 0; l < 8; l++) {
      if (splitSliceBoard[k][l] === splitSliceBoard[k][l + 1]) {
        count++;
        if (splitSliceBoard[k][l + 1] === "W") splitSliceBoard[k][l + 1] = "B";
        else splitSliceBoard[k][l + 1] = "W";
      }
      if (splitSliceBoard[k][l] === splitSliceBoard[k + 1][l]) {
        count++;
        if (splitSliceBoard[k + 1][l] === "W") splitSliceBoard[k + 1][l] = "B";
        else splitSliceBoard[k + 1][l] = "W";
      }
    }
  }
};
const blockCount = (splitSliceBoard) => {
  const compared = [];
  const copy1 = JSON.parse(JSON.stringify(splitSliceBoard));
  const copy2 = JSON.parse(JSON.stringify(splitSliceBoard));

  if (splitSliceBoard[0][0] === "B") {
    changeBlock(copy1);
    compared.push(count);
    count = 0;

    copy2[0][0] = "W";
    count++;
    changeBlock(copy2);
    compared.push(count);
  } else {
    changeBlock(copy1);
    compared.push(count);
    count = 0;

    copy2[0][0] = "B";
    count++;
    changeBlock(copy2);
    compared.push(count);
  }
  return Math.min(...compared);
};

// board를 이동하며 최소값을 찾음
const findMinNum = [];
for (let i = 0; i <= w - 8; i++) {
  const wSliceBoard = board.map((item) => item.slice(0 + i, 8 + i));
  for (let j = 0; j <= h - 8; j++) {
    const hSliceBoard = wSliceBoard.slice(0 + j, 8 + j);
    const splitSliceBoard = hSliceBoard.map((item) => item.split(""));

    findMinNum.push(blockCount(splitSliceBoard));
    count = 0;
  }
}

console.log(Math.min(...findMinNum));
