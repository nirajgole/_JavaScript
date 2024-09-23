const greet = function (text) {
  //1st
  return function (text1) {
    //2nd
    return function () {
      //3rd
      console.log(`${text} ${text1}`);
    };
  };
};

//Calling returning function 1st->2nd->3rd
greet('Hey')('Jess')();

//Another way of calling returning function
// stores 1st return
const greetSomeone = greet('Hello');
//2nd return
const displayGreet = greetSomeone('John');
//3rd return
displayGreet();

//using arrow

const welcome = text => text1 => console.log(`${text} ${text1}`);
welcome('Welcome')('Rock');
