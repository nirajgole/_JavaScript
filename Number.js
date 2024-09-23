const num1 = '100';
// '+' operator converts string to number
console.log(typeof +num1);

// it's error in js will result in false
console.log(0.1 + 0.2 === 0.3);

const width = '30px';
// parseInt() will remove unnecessary characters than numbers but string must start with number only
console.log(Number.parseInt(width, 10)); // here 10 represents radix for base10, for binary we use 2

//Other Number methods
//isNaN, isFinite, isInteger, parseFloat

console.log(BigInt(20) / 10n);

//i18l - internationalization
const numberToBeFormatted = 11_11_10_10_10_10;
console.log(
  'Indian number format: ',
  new Intl.NumberFormat('en-IN').format(numberToBeFormatted)
);

const options = {
  style: 'unit',
  unit: 'mile-per-hour'
};
console.log(
  'Indian number format: ',
  new Intl.NumberFormat('en-IN', options).format(numberToBeFormatted)
);
