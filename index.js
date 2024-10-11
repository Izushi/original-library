function myMap(cbFn) {
  return function (array) {
    const result = [];
    array.forEach((element, index) => {
      result.push(cbFn(element, index));
    });
    return result;
  }
}

function sayHello() {
    return "Hello, World!";
}

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

const numbers = [1, 2, 3, 4, 5];
const callback = myMap(element => element * 2);
const result = callback(numbers);
console.log(result);

const hello = sayHello();
console.log(hello);

module.exports = myMap, sayHello, sum, multiply;