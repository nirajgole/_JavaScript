const RomanNumerals = {
  roman: {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  },
  toRoman(number) {
    // convert the number to a roman numeral
    let ans = '';
    for (const a in this.roman) {
      while (number >= this.roman[a]) {
        ans += a;
        number -= this.roman[a];
      }
    }
    return ans;
  },

  fromRoman(str) {
    return str
      .match(/CM|CD|XC|XL|IX|IV|\w/g)
      .reduce((acc, el) => acc + this.roman[el], 0);
  }
};

console.log(RomanNumerals.toRoman(1946));
console.log(RomanNumerals.fromRoman('XXX'));
