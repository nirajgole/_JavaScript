// function duplicateEncode(word) {
//   // ...
//   let finalStr = "";
//   let res = String(word).toLowerCase();

//   for (let i = 0; i < res.length; i++) {
//     let count = 0;
//     let strLength = 0;
//     while (strLength < res.length) {
//       console.log(res[strLength]);
//       if (res[i] === res[strLength]) {
//         count++;
//       }
//       strLength++;
//     }
//     if (count > 1) finalStr += ")";
//     else finalStr += "(";
//   }

//   return finalStr;
// }

// function duplicateEncode(word) {
//   return String(word)
//     .toLowerCase()
//     .split("")
//     .map(function (a, i, w) {
//       return w.indexOf(a) === w.lastIndexOf(a) ? "(" : ")";
//     })
//     .join("");
// }

const duplicateEncode = s =>
  s.toLowerCase().split``.map((e, _, a) =>
    a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')'
  ).join``;

console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));
