/*
Largest palindrome product
Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isPalindrome = x => {
  x = String(x);
  let limit = Math.floor(x.length / 2);
  for (let i = 0; i < limit; i++) {
    if (x[i] !== x[x.length - i - 1]) {
      return false;
    }
  }
  return true;
};

const largestPalindromeProduct = () => {
  let largest = -1;

  let first = 999;

  while (first > 0) {
    let second = 999;

    while (second > 0) {
      const product = first * second;
      if (isPalindrome(product) && product > largest) {
        largest = product;
      }
      second--;
    }
    first--;
  }

  return largest;
};

console.log(largestPalindromeProduct());
