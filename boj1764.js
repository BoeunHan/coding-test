const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");

let [n, ...arr] = input;

arr = arr.map((item) => item.replace("\r", ""));
const names = new Map();

const result = new Array();
for (let name of arr) {
    if (names.has(name)) {
        const cnt = names.get(name);
        names.set(name, cnt + 1);
        result.push(name);
    } else {
        names.set(name, 1);
    }
}

result.sort();
console.log(result.length);
for (let name of result) console.log(name);
