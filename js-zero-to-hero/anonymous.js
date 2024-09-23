'use strict'; //activating strict mode

addTwoNumbers(10, 20); //30

//function declaration
function addTwoNumbers(number_1, number_2) {
	console.log(
		`Addition of ${number_1} and ${number_2} is ${
			Number(number_1) + Number(number_2)
		}`
	);
}

sumOfTwoNumbers(10, 20); //ReferenceError: Cannot access 'sumOfTwoNumbers' before initialization

//function expression
//A N O N Y M O U S function (ES6 ()=>{} - arrow functions)
const sumOfTwoNumbers = function (number_1, number_2) {
	console.log(
		`Addition of ${number_1} and ${number_2} is ${
			Number(number_1) + Number(number_2)
		}`
	);
};
