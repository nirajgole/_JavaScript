// var assert = require('assert')

function digPow(n, p) {
  const x = String(n)
    .split('')
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}

// function digPow(n, p) {
//   // ...
//   const myNumberArray = String(n).split('').map(Number)
//   let sum = 0
//   for (let i = 0; i < myNumberArray.length; i++) {
//     sum += Math.pow(myNumberArray[i], p + i)
//   }

//   return sum % 1 === 0 ? sum / n : -1
// }
console.log(digPow(46288, 3));

// assert.strictEqual(digPow(92, 1), -1)

//1. Split the number into digits
//2. Power the digit with increasing order
//3. Add All powered digits
//4. Divide the sum by original number
