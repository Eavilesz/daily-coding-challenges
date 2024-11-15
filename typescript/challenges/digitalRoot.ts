// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

export const digitalRoot = (n: number): number => {
  const numsArray: number[] = n
    .toString()
    .split('')
    .map((num) => parseInt(num));

  const sum = numsArray.reduce((acc, curr) => acc + curr, 0);

  if (sum > 9) {
    // This return statement is needed so that the recursion returns a value and not undefined.
    return digitalRoot(sum);
  } else {
    return sum;
  }
};
