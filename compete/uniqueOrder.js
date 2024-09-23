//-->Code wars
//-->Unique in Order

// var uniqueInOrder = function (iterable) {
//   //your code here - remember iterable can be a string or an array
//   let resultArray = []
//   const iterable_length = iterable.length
//   let temp = iterable[0]
//   for (let i = 1; i <= iterable_length; i++) {
//     if (temp !== iterable[i]) {
//       resultArray.push(temp)
//       temp = iterable[i]
//     }
//   }
//   return resultArray
// }
const uniqueInOrder = (d) => [...d].filter((x, i, a) => x !== a[i + 1])
// var res = uniqueInOrder('AAAABBBCCDAABBB')
var res = uniqueInOrder([1, 2, 2, 3, 3])
// var res = uniqueInOrder('AAAABBBCCDAABBB')
console.log(res)

//1. iterate over given array
//2. store first element in temp var
//3. check every other element against temp var if that matches with temp
//4. if it doesn't matches then store temp in result array and replace temp with new iterable element
