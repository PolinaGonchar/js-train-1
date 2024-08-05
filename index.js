// Task 1: Write a function that checks if a given number is even.

function isEvenNumber(number) {
  return number % 2 === 0;
}

console.log("Task 1 ====================================");
console.log("isEvenNumber(10)", isEvenNumber(10)); // Output: true
console.log("isEvenNumber(7)", isEvenNumber(7)); // Output: false

// Task 2: Write a function that calculates the sum of numbers from 1 to the given number. Use a loop to add the numbers sequentially.

function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log("Task 2 ====================================");
console.log("calculateSum(5)", calculateSum(5)); // Output: 15
console.log("calculateSum(10)", calculateSum(10)); // Output: 55

// Task 3: Write a function that checks if a given number is prime (divisible only by itself and 1). Use a loop to check divisibility.

function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("Task 3 ====================================");
console.log("isPrimeNumber(7)", isPrimeNumber(7)); // Output: true
console.log("isPrimeNumber(10)", isPrimeNumber(10)); // Output: false

// Task 4: Write a function that checks if a given number is positive. Use a conditional operator to check the number.

function isPositiveNumber(number) {
  return number > 0;
}

console.log("Task 4 ====================================");
console.log("isPositiveNumber(5)", isPositiveNumber(5)); // Output: true
console.log("isPositiveNumber(-2)", isPositiveNumber(-2)); // Output: false

// Task 5: Write a function that checks if a given string is empty. Use a conditional operator and the string length property to check.

function isEmptyString(string) {
  return string === "";
}

console.log("Task 5 ====================================");
console.log('isEmptyString("")', isEmptyString("")); // Output: true
console.log('isEmptyString("Hello")', isEmptyString("Hello")); // Output: false

// Task 6: Write a function checkDataType that takes a parameter value and checks its data type. Use the typeof operator to determine the type of the value.
// Print a message to the console with the result of the type check, e.g., "Value 'hello' is of type 'string'"

function checkDataType(value) {
  let type = typeof value;
  console.log(`Value ${value} is of type ${type}`);
  return type;
}

console.log("Task 6 ====================================");
console.log("checkDataType(42)", checkDataType(42)); // Output: Value 42 is of type "number".
console.log("checkDataType('Hello')", checkDataType("Hello")); // Output: Value Hello is of type "string".
console.log("checkDataType(true)", checkDataType(true)); // Output: Value true is of type "boolean".
console.log("checkDataType(undefined)", checkDataType(undefined)); // Output: Value undefined is of type "undefined".

// Task 7: Write a function findMax that takes two numbers num1 and num2 and returns the larger one. Use an if statement and comparison operators to determine the larger number.

function findMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log("Task 7 ====================================");
console.log("findMax(10, 5)", findMax(10, 5)); // Output: 10
console.log("findMax(8,12)", findMax(8, 12)); // Output: 12
console.log("findMax(7, 7)", findMax(7, 7)); // Output: 7

// Task 8: Write a function getUserStatus that takes a user's age and returns a string indicating their status.
// If the age is less than 18, the function returns "Minor". If the age is between 18 and 65, the function returns "Adult". If the age is 65 or older, the function returns "Senior".
// Use if, else if, and comparison operators to determine the user's status.

function getUserStatus(age) {
  if (age < 18) {
    return "Minor";
  } else if (age >= 18 && age < 65) {
    return "Adult";
  } else {
    return "Senior";
  }
}

console.log("Task 8 ====================================");
console.log("getUserStatus(15)", getUserStatus(15)); // Output: "Minor"
console.log("getUserStatus(25)", getUserStatus(25)); // Output: "Adult"
console.log("getUserStatus(70)", getUserStatus(70)); // Output: "Senior"

// Task 9: Write a function getDayOfWeek that takes a day number (1-7) and returns a string corresponding to that day of the week.
// Use a switch case statement to determine the day of the week based on the day number.

function getDayOfWeek(dayNumber) {
  let day;
  switch(dayNumber) {
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
    case 7:
      day = 'Sunday';
      break;
    default:
      day = "Invalid day number";
  }
  return day;
}

console.log("Task 9 ====================================");
console.log("getDayOfWeek(1)", getDayOfWeek(1)); // Output: "Monday"
console.log("getDayOfWeek(3)", getDayOfWeek(3)); // Output: "Wednesday"
console.log("getDayOfWeek(6)", getDayOfWeek(6)); // Output: "Saturday"
console.log("getDayOfWeek(8)", getDayOfWeek(8)); // Output: "Invalid day number"

// Task 10: Write a function getVariableType that takes a variable and returns a string corresponding to the type of that variable. Use the ternary operator to determine the type of the variable.

function getVariableType(variable) {
  let type = typeof(variable);
  let result =
    type === "number" ? "Number" :
    type === "string" ? "String" :
    type === "boolean" ? "Boolean" : "Other";
  return result;
}

console.log("Task 10 ====================================");
console.log("getVariableType(10)", getVariableType(10)); // Output: "Number"
console.log('getVariableType("Hello")', getVariableType("Hello")); // Output: "String"
console.log("getVariableType(true)", getVariableType(true)); // Output: "Boolean"
console.log("getVariableType([1, 2, 3])", getVariableType([1, 2, 3])); // Output: "Other"

// Task 11: Write a recursive function that calculates the factorial of a number.
// The factorial of a number is the product of all positive integers from 1 to that number. For example, factorial of 5 (written as 5!) is 1*2*3*4*5 = 120.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log("Task 11 ====================================");
console.log("factorial(5)", factorial(5)); // Output: 120
console.log("factorial(10)", factorial(10)); // Output: 3628800

// Task 12: Create a function `makeAdder` that takes a number `x` and returns a new function that takes a number `y` and returns the sum of `x` and `y`.

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

let getAdder = makeAdder(5);

console.log("Task 12 ====================================");
console.log("getAdder(10)", getAdder(10)); // Output: 15
console.log("makeAdder(5)(10)", makeAdder(5)(10)); // Output: 15

// Task 13: Create an arrow function that takes two numbers and returns their product.

let multiply = (x, y) => {
  return x * y;
};

console.log("Task 13 ====================================");
console.log("multiply(5, 3)", multiply(5, 3)); // Output: 15

// Task 14: Create a curried function `divide` that can be called as `divide(x)(y)` to get the result of dividing `x` by `y`.

function divide(x) {
  return function nwFun(y){  return x / y; };
}
let getDivider = divide(2);

console.log("Task 14 ====================================");
console.log("divide(10)", getDivider(10)); // Output: 0.2
console.log("divide(15)(3)", divide(2)(10)); // Output: 0.2

// Task 15: Create a memoized version of a function that calculates the area of a square based on the length of its side.

function memoizedArea() {
  let prevSide = null;
  let prevResult = null;
  return function(side) {
    if (prevSide === side) {
      console.log("Fetching from cache");
      return prevResult;
    } else {
      console.log("Calculating result");
      let result = side * side;
      prevSide = side;
      prevResult = result;
      return result;
    }
  }
}

let squareArea = memoizedArea();
console.log("Task 15 ====================================");
console.log("squareArea(5)", squareArea(5)); // Calculates and logs 25
console.log("squareArea(5)", squareArea(5)); // Logs "Fetching from cache" and 25 from cache
console.log("squareArea(6)", squareArea(6)); // Calculates and logs 36
console.log("squareArea(6)", squareArea(6)); // Logs "Fetching from cache" and 36 from cache

// Task 16: Create a function expression to calculate the cube of a number.
let cube = function(n) {
  // Return n cubed
  return n ** 3;
};

console.log("Task 16 ====================================");
console.log("cube(3)", cube(3)); // Logs: 27

// Task 17: Create two functions, one that increments a number by 1 and another that multiplies a number by 2, and then create a composition of these functions.
function increment(n) {
  return n + 1;
}

function double(n) {
  return n * 2;
}

function compose(func1, func2) {
  return function(n) { return func2(func1(n)); }
}

let createCompose = compose(increment, double);

console.log("Task 17 ====================================");
console.log("createCompose(5)", createCompose(5)); // Logs: 12 (5 + 1 = 6, 6 * 2 = 12)
