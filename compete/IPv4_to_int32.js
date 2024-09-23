function ipToInt32(ip) {
  return ip.split('.').reduce(function (int, v) {
    console.log(int);
    console.log(v);
    return int * 256 + +v;
  });
  // '+' operator converts string to number i.e. if v is string then +v will be number
}

console.log(ipToInt32('128.32.10.1'));
// ipToInt32("128.32.10.1") => 2149583361

// explanation

// "3276832" (INCORRECT) vs 128 * 256 + 32 // 32800 (CORRECT). Without coercing 'v' you actually coerce 'int' back into a string and concatenate 'v'
// Kucharskimaciej your comment above is incorrect. +v is not an equivalent of parseInt(v, 10).
// It is, in fact, an equivalent of Number(v). The '+' operator is a shorthand to coerce each 'v' from a string to a number.
// This might seem like splitting hairs, but it’s a critical point for others to understand this shorthand in a broader context.
// In the solution above, we see that 'int' is already coerced into a number because of the *256.
// If we step through the first loop of the reduce method without coercing 'v',
// we can see how the sum would change — 128 * 256 + "32"

const str = 'abc';
console.log(typeof +str);
