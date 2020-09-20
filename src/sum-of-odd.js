'use strict';

/**
 * Implement sumOfOdd function:
 *
 * Given the triangle of consecutive odd numbers:
 *
 *             1
 *          3     5
 *       7     9    11
 *    13    15    17    19
 * 21    23    25    27    29
 * ...
 *
 * Calculate the sum of all numbers in a row of the triangle
 *
 * Row index (starting at index 1) e.g.:
 *
 * rowSumOddNumbers(1); // 1
 * rowSumOddNumbers(2); // 3 + 5 = 8
 * rowSumOddNumbers(-1); // 0
 *
 * @param {number} row
 *
 * @return {number}
 */
function rowSumOddNumbers(row) {
  if (row < 1) {
    return 0;
  };

  const arrSum = [];
  const firstNum = row * (row - 1) + 1;

  for (let i = firstNum; i < firstNum + (row * 2) - 1; i += 2) {
    arrSum.push(i);
  };

  return arrSum.reduce((sum, e) => sum + e);
}

module.exports = rowSumOddNumbers;
