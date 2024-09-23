//Typescript is a superset of javascript
//Run below command to get started
//npm i -g typescript ts-node '@types/node'

let no: number | string = 5; // can assign number or string variable
no = '454';
console.log(Number(no));

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'Sam'
};

console.log(user);

//Type Assertion
let cid: any = 123;
let customerId: number = <number>cid;
let customerId1: number = cid as number;

//Functions
function add(a: number, b: number): number {
  return a + b;
}

//Void function - No return type or simply it doesn't return anything
function sayHello(): void {
  console.log('Hello');
}

//Interfaces
interface Employee {
  readonly id: number; //immutable
  name: string; //required
  salary?: number; //optional
}

const emp1: Employee = {
  id: 1,
  name: 'Jessica',
  salary: 5000
};
// emp1.id=2; // will throw error as id is immutable
console.log(emp1);

// will throw error as name is required
// const emp2:Employee={
//     id:2,
// }

const emp3: Employee = {
  id: 2,
  name: 'Martin'
  // salary:5000 // can be created without salary as it is optional
};

console.log(emp3);

interface MathFuncADD {
  (a: number, b: number): number;
}

// const add1:MathFuncADD=(a:number,b:string):number=>a+b; // will throw error as b is string

//classes

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  readonly id: number; //access modifiers - public, private, protected
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register(): string {
    return `${this.name} is registered`;
  }
}

const miker = new Person(1, 'Mike Lewis');
console.log(miker);
console.log(miker.register());

// nfn - named function
// dar - state destructure
// clg - console log

// here Staff is called as subclass of Person
class Staff extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const stf = new Staff(2, 'Sam', 'Manager');
console.log(stf);

//Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray: number[] = getArray([1, 2, 3]);
let strArray: string[] = getArray(['a', 'b', 'c']);
numArray.push(4);
/**Below snippet will throw error as numArray is number and strArray
 is string though both are same generic type*/
// numArray.push(strArray[0]);
