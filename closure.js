//Example 1
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker(); // 1 passenger i=0->1
booker(); // 2 passenger i=1->2

//Example 2
let f;
const g = function () {
  const a = 100;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 111;
  f = function () {
    console.log(b * 3);
  };
};

g();
f();
// function f will be re-assigned after calling function h
h();
f();
console.dir(f);

//Example 3
const boardpassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardpassengers(180, 3);
