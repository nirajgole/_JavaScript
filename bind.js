//Partial function
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
//addVat = value => value + value * 0.23
console.log(addVat(100));

//using function returning function
const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTax2(0.23);
console.log(addVat2(100));
