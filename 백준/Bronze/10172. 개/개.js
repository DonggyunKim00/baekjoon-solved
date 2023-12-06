const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString();

console.log(`|\\_/|`);
console.log(`|q p|   /}`);
console.log(`( 0 )"""\\`);
console.log(`|"^"\`    |`);
console.log(`||_/=\\\\__|`);
