const fs = require('fs');
const eventYear = process.argv[2];
const eventDay = process.argv[3]

const input1 = fs.readFileSync(`./inputs/${eventYear}/Day${eventDay}/part1.txt`, 'utf-8');
const input2 = fs.readFileSync(`./inputs/${eventYear}/Day${eventDay}/part2.txt`, 'utf-8');

const solution1 = require(`./solutions/${eventYear}/Day${eventDay}/part1.js`);
const solution2 = require(`./solutions/${eventYear}/Day${eventDay}/part2.js`);

console.log(solution1.solve(input1));
console.log(solution2.solve(input2));
