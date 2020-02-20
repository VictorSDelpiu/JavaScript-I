// browser runs our code just in time

// Global Scope (The World)

{ // Kingdom
  var varTest = "Testing our var!";
  var varTest = "This is bonkers";
  let letTest = "Testing our let!";
  letTest = "I am mutable!";
  const constTest = "I am a const!";
  // console.log(varTest);
  // console.log(letTest);
  // console.log(constTest);
}

/*

Var
- function scoped
- value is mutable
- can be re declared
- avoid using!

Let
- block scoped
- value is mutable
- reference cannot be re declared

Const
- block scoped
- value is immutable
- reference cannot be re declared

*/

// Functions

// function declaration
function stopVar() {
  var somethingElse = "I want out!";
  return somethingElse;
}
//console.log(stopVar());

// The placeholders that recieve arguments are called parameters
function add(num1, num2) {
  return num1 + num2;
}

// invoking the function "AKA, calling the function"
// The values being passed into the function are called arguments
// console.log(add(2,4));


// function expressions
const functionExpressionAdd = function(num1, num2) {
  return num1 + num2;
};
//console.log(functionExpressionAdd(2,4));

// Arrow functions
const arrowAdd = (num1, num2) => {
  return num1 + num2;
};
//console.log(arrowAdd(2,4));

// Object Literals
const animal = {
  // key/value pairs of the object "properties"
  name: "Zebra",
  weight: 100,
  height: 65,
  habitat: "Plains",
  // functions of the object "methods"
  eat: function() {
    return "This animal likes to eat grass";
  },
  run: function() {
    return "This animal runs fast";
  }
};

// console.log(animal.name);
// console.log(animal.eat());
// console.log(animal.run());

// console.log(Object.entries(animal));
//console.log(Object.entries(object2)[2]);

// Array

const fruits = ["Peach","Apple","Orange","Watermellon"];

console.log(fruits.reverse());
