//When working with big numbers in JavaScript, you can use _ to visually separate the digits.
//It also work with other notations, such as octals, hexadecimals and binary.
// 0xF302AB === 0xF3_02_AB
// 0o0101  === 0o01_01
// 0b1010 == 0b10_10
// The only "problem" with '_' as far as I know is that it doesn't work with "0" octal notation.
// 011 === 9 // true
// 0_11 // syntax error

const numberOne = 100000000
const numberTwo = 100_000_000

console.log(numberOne === numberTwo) //true
