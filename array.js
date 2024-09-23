const fruits = [
  'Apple: 🍎',
  'Guava: 🍏',
  'Banana: 🍌',
  'Strawberry: 🍓',
  'Mango:🥭'
];

console.log(fruits.slice(-1));

//slice, splice, reverse, concat, join
//forEach(item,index,arr) //cannot break out foreach loop
//for(const [index, item] of items.entries())
//map, filter, reduce
//find, findIndex
//some, every, includes
//flat, flatMap

//mutating array methods::
//adding elements: push,unshift
//removing elements:pop, shift, splice
//sort
//fill, from
const zrr = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(zrr);

const food = [
  'chicken tikka pizza',
  'farmfresh pizza',
  'garlic bread',
  'sausage pizza',
  'green apple',
  'maharaja veg pizza',
  'french fries',
  'picante paneer pizza',
  'chicken meatballs'
];
const reducedrr = food.reduce(
  (count, cur) => (cur.includes('pizza') ? ++count : count),
  0
);
console.log(reducedrr);
