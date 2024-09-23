// function dropElements(arr, func) {
//   let res1 = arr.map(func).findIndex((a) => a === true);
//   return res1 < 0 ? [] : arr.slice(res1);
// }

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

console.time();
const res = dropElements([1, 2, 3, 4], function (n) {
  return n > 5;
});
console.timeEnd();
console.log(res);
