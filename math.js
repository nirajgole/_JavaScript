const arr = [1, 5, 3, 6, 9, '101', 20];

console.log(Math.min(...arr));
// automatically parses 101 string to number
console.log(Math.max(...arr));

//generating random numbers upto 1-9 rounding with floor
const randomInt = (min, max) => Math.floor(Math.random() * max - min, +1) + min;

console.log(randomInt(1, 9));

//rounding methods
//round, ceil, floor, trunc
//abs

const decimal = 2.7;
// toFixed always returns string
console.log(decimal.toFixed(0));
console.log(decimal.toFixed(2));
