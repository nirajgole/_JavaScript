//IIFE: Immediately invoked function expressions

(function () {
  console.log('This will never run again!');
})();

(() => console.log('This will also never run again!'))();
