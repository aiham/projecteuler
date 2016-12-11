/*
Squarefree Hilbert numbers
Problem 580
A Hilbert number is any positive integer of the form 4k+1 for integer k≥0. We shall define a squarefree Hilbert number as a Hilbert number which is not divisible by the square of any Hilbert number other than one. For example, 117 is a squarefree Hilbert number, equaling 9×13. However 6237 is a Hilbert number that is not squarefree in this sense, as it is divisible by 9^2. The number 3969 is also not squarefree, as it is divisible by both 9^2 and 21^2.

There are 2327192 squarefree Hilbert numbers below 10^7.
How many squarefree Hilbert numbers are there below 10^16?
*/

const isSquareFreeHilbert = (x, hilberts) => {
  for (let i = 0, l = hilberts.length; i < l; i++) {
    const hilbert = hilberts[i];
    if (hilbert > i) {
      break;
    }
    if (x % hilbert === 0) {
      return false;
    }
  }
  return true;
};

const oldCountSquareFreeHilberts = limit => {
  const hilberts = [];
  let count = 1;
  for (let i = 2; i < limit; i++) {
    if ((i - 1) % 4 !== 0) {
      continue;
    }
    if (isSquareFreeHilbert(i, hilberts)) {
      hilberts.push(i * i);
      count++;
    }
  }
  return count;
};

const countSquareFreeHilberts = limit => {
  let count = 1;
  let isSquareFree;
  let k, h;

  for (let i = 2; i < limit; i++) {
    if ((i - 1) % 4 !== 0) {
      continue;
    }

    isSquareFree = true;
    k = 1;
    h = 4*k+1;
    h *= h;

    while (h <= i) {
      if (i % h === 0) {
        isSquareFree = false;
        break;
      }
      k++;
      h = 4*k+1;
      h *= h;
    }

    if (isSquareFree) {
      count++;
    }
  }

  return count;
};

console.log(countSquareFreeHilberts(Math.pow(10, 7)));
