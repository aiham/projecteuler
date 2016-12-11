/*
Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

const isPrime = x => {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const largestPrime = target => {
  let firstFactorial = null;
  let largest = -1;
  for (let i = 3; i < target; i += 2) {
    if (target % i === 0) {
      if (firstFactorial === null) {
        firstFactorial = i;
      }
      if (isPrime(i)) {
        largest = i;
      }
      if (target / i === firstFactorial) {
        break;
      }
    }
  }
  return largest;
};

console.log(largestPrime(600851475143));
