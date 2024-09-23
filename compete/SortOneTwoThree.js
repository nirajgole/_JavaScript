function sortByName(ary) {
  const numberText = new Map([
    [900, 'nine hundred'],
    [800, 'eight hundred'],
    [700, 'seven hundred'],
    [600, 'six hundred'],
    [500, 'five hundred'],
    [400, 'four hundred'],
    [300, 'three hundred'],
    [200, 'two hundred'],
    [100, 'one hundred'],
    [90, 'ninety'],
    [80, 'eighty'],
    [70, 'seventy'],
    [60, 'sixty'],
    [50, 'fifty'],
    [40, 'forty'],
    [30, 'thirty'],
    [20, 'twenty'],
    [19, 'nineteen'],
    [18, 'eighteen'],
    [17, 'seventeen'],
    [16, 'sixteen'],
    [15, 'fifteen'],
    [14, 'fourteen'],
    [13, 'thirteen'],
    [12, 'twelve'],
    [11, 'eleven'],
    [10, 'ten'],
    [9, 'nine'],
    [8, 'eight'],
    [7, 'seven'],
    [6, 'six'],
    [5, 'five'],
    [4, 'four'],
    [3, 'three'],
    [2, 'two'],
    [1, 'one'],
    [0, 'zero']
  ]);

  //convert number to text
  const numberToTextTransform = number => {
    if (numberText.has(number)) {
      return numberText.get(number);
    }
    let numberString = [];
    for (const [key, value] of numberText) {
      if (number >= Number(key) && number !== 0) {
        numberString.push(value);
        number -= key;
      }
    }
    return numberString.join(' ');
  };

  return ary.sort((a, b) =>
    numberToTextTransform(a) > numberToTextTransform(b) ? 1 : -1
  );
}

// const res = sortByName([152, 909, 10, 11, 10, 111, 10, 8, 9]);
// const res = sortByName([9, 99, 999]);
const res = sortByName([0, 1, 3, 2]);
console.log(res);
