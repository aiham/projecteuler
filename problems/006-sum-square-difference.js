/*
Sum square difference
Problem 6
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const sumOfSquares = limit => {
  let total = 0;
  for (let i = 1; i <= limit; i++) {
    total += i * i;
  }
  return total;
};

const squareOfSum = limit => {
  let total = 0;
  for (let i = 1; i <= limit; i++) {
    total += i;
  }
  return total * total;
};

const difference = limit => {
  return squareOfSum(limit) - sumOfSquares(limit);
};

console.log(difference(100));
