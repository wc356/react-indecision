// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
  name: "Woo",
  cities: ["New York", "Virginia", "Seoul", "New Jersey"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  // numbers - array of numbers
  numbers: [1, 5, 6, 8, 15],
  // multiplyBy - single number
  multiplyBy: 34,
  // multiply - return a new array where numbers have been multiplied
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]
