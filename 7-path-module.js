const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
// Output: /content/subfolder/test.txt
console.log(filePath);

const base = path.basename(filePath);
// Output: test.txt
console.log(base);

const dirname = path.dirname(filePath);
// Output: /content/subfolder
console.log(dirname);

const ext = path.extname(filePath);
// Output: .txt
console.log(ext);