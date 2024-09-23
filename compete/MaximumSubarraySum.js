const maxSequence = function (arr) {
  if (Array.isArray(arr) && arr.length) {
    const checkIfAllPositive = arr.every(e => e >= 0);
    const checkIfAllNegative = arr.every(e => e < 0);
    if (checkIfAllNegative) return 0;
    if (checkIfAllPositive) return arr.reduce((num1, num2) => num1 + num2, 0);

    // let arrStr = String(arr)
    let maxSum = 0;
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length; j++) {
        let newStr = arr.slice(i, j);
        console.log(newStr);
        let temp = newStr.filter(e => e >= 0).reduce((a, b) => a + b, 0);

        if (temp > maxSum) {
          //   console.log(temp + ' ' + maxSum)
          maxSum = temp;
          resultArray = newStr;
        }
      }
    }
    return resultArray;
  }
  return 0;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
