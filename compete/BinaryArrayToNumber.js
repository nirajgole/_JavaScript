//-->code wars
const binaryArrayToNumber = arr => {
  // your code
  const result = arr.toString().map(Number);
  return result;
};

console.log(binaryArrayToNumber([1, 1, 1, 1]));
