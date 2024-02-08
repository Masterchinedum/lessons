//Modules - Encapsulates code(only share minimum)
//CommonJS, every file is module (by default)
// const secret = 'SUPER SECRETE'
// const john = 'john';
// const peter = 'peter'

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }

// sayHi('susan')
// sayHi(john)
// sayHi(peter)
const name = require('./3-names')
const sayHi = require('./4-utils')

console.log(name.peter)
