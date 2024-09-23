function steamrollArray(arr) {
  if (Array.isArray(arr)) {
    steamrollArray(arr);
  } else {
    for (let i = 0; i < arr.length; i++) {
      arr.push(arr[i]);
    }
    return arr;
  }
}

let res = steamrollArray([1, [2], [3, [[4]]]]);
console.log(res);
