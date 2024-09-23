//One of the brilliant solutions using (~) operator
function add(a, b) {
  let res = '',
    c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res;
}

//solution-2
// function add(a, b) {
//   let carry = 0;
//   const result = [],
//     len = Math.max(a.length, b.length),
//     i = len;
//   while (i--) {
//     const sum =
//       (+a[i - len + a.length] || 0) + (+b[i - len + b.length] || 0) + carry;
//     carry = parseInt(sum / 10);
//     result.unshift(sum % 10);
//   }
//   if (carry) {
//     result.unshift(carry);
//   }
//   return result.join('');
// }

//my-solution
// function add(a, b) {
//   let bigB = String(b).split('').reverse().join(''),
//     bigA = String(a).split('').reverse().join('');

//   const sumArr = [];
//   if (bigA.length !== bigB.length) {
//     if (bigA.length > bigB.length) {
//       bigB = bigB.padEnd(a.length, '0');
//     } else {
//       bigA = bigA.padEnd(b.length, '0');
//     }
//   }
//   let temp = 0;
//   let addnext = 0;
//   for (let i = 0; i < bigA.length; i++) {
//     const sum = Number(bigA[i]) + Number(bigB[i]) + temp;
//     addnext = sum % 10;
//     temp = parseInt(sum / 10);
//     sumArr.push(addnext);

//     if (bigA[i + 1] === undefined && temp) {
//       sumArr.push(temp);
//     }
//   }

//   return sumArr.reverse().join('');
// }

console.log(add('9999999999999999999999999999999999999999*999999999999999999', '2222222222222222222222222222222'));

//1. iterate over string converting each character into number and adding into each other
//2. Mod the acquired sum and store the value in variable to add to next sum
//3. if last sum mod get value then add directly to array
