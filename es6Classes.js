class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  getCarInfo() {
    return `Manufacturer: ${this.brand}\nColor       : ${this.color}`;
  }

  //private field
  #type = 'passenger';
  #mileage = '20';

  //public field
  fuel = 'petrol';

  //static field
  static tyre = 5;

  //public method
  getMileage() {
    return this.#mileage;
  }

  //private method
  #getCarType() {
    return this.#type;
  }

  //static methods
  static fuelType() {
    return this.fuel;
  }

  get carColor() {
    return this.color;
  }

  set carColor(val) {
    this.color = val;
  }
}

const myCar = new Car('Porsche', 'Black');
// console.log(myCar.#type);
console.log(myCar.fuel);
console.log(myCar.getMileage());
console.log(myCar);
console.log(myCar.getCarInfo());
myCar.carColor = 'Red';
console.log(myCar.carColor);
// console.log(myCar.carColor);
