/*
10001st prime
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

const isPrime = x => {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = limit => {
  let i = 2;
  let latest;
  let count = 0;

  while (count < limit) {
    if (isPrime(i)) {
      latest = i;
      count++;
    }
    i++;
  }

  return latest;
};

console.log(prime(10001));
