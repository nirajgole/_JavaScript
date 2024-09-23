function simpleCalculator(a, b) {
  const additionOfTwo = a + b;
  const differenceOfTwo = a - b;
  const productOfTwo = a * b;
  return `Addition:${additionOfTwo}\tDifference:${differenceOfTwo}\tProduct:${productOfTwo}`;
}

const firstNumber = 10;
const secondNumber = 20;

console.log(simpleCalculator(firstNumber, secondNumber));
