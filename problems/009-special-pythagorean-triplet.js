/*
Special Pythagorean triplet
Problem 9
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

const productOfTripletWithSum = sum => {
  let a, b, c;

  for (a = 1; ; a++) {
    for (b = 2; ; b++) {
      c = 1000 - a - b;
      if (c <= b) {
        break;
      }
      if ((c * c) === (a * a + b * b)) {
        return a * b * c;
      }
    }
  }
};

console.log(productOfTripletWithSum(1000));
