//-->code wars
const reductionNumber = (num) => {
  let result = 1
  result = Array.from(String(num), Number)
  return result.reduce((x, i) => x * i)
}
function persistence(num) {
  var times = 0

  num = num.toString()

  while (num.length > 1) {
    times++
    num = num
      .split('')
      .map(Number)
      .reduce((a, b) => a * b)
      .toString()
  }

  return times
}

// console.log(persistence(39))
console.log(persistence(999))

//1. split the given number into single digits
//2. multiply digits and store result
//3. Repeat until we get single digit

// const myNumber = 999
// console.log('' + parseInt(myNumber / 10))

//[0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue )
