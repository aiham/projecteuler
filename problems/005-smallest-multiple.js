/*
Smallest multiple
Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const isDivisible = (x, limit) => {
  for (let i = 1; i < limit; i++) {
    if (x % i !== 0) {
      return false;
    }
  }
  return true;
};

const smallestMultiple = limit => {
  let i = 1;
  while (!isDivisible(i, limit)) {
    i++;
  }
  return i;
};

console.log(smallestMultiple(20));
