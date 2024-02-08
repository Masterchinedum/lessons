const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// Merge the two files into one and save it to disk
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});