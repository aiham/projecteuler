/*
Summation of primes
Problem 10
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

const isPrime = (x, previous) => {
  for (let i = 0, l = previous.length; i < l; i++) {
    if (x % previous[i] === 0) {
      return false;
    }
  }
  return true;
};

const summationOfPrimes = limit => {
  let total = 2;
  let primes = [2];
  for (let i = 3; i < limit; i += 2) {
    if (isPrime(i, primes)) {
      total += i;
      primes.push(i);
    }
  }
  return total;
};

console.log(summationOfPrimes(2000000));
