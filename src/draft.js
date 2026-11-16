/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let row = 0; row < size; row += 1) {
    matrix[row] = [];
    for (let column = 0; column < size; column += 1) {
      matrix[row][column] = 0;
    }
  }

  let number = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column += 1) {
      matrix[top][column] = number;
      number += 1;
    }
    top += 1;

    for (let row = top; row <= bottom; row += 1) {
      matrix[row][right] = number;
      number += 1;
    }
    right -= 1;

    if (top <= bottom) {
      for (let column = right; column >= left; column -= 1) {
        matrix[bottom][column] = number;
        number += 1;
      }
      bottom -= 1;
    }

    if (left <= right) {
      for (let row = bottom; row >= top; row -= 1) {
        matrix[row][left] = number;
        number += 1;
      }
      left += 1;
    }
  }

  return matrix;
}
console.log(getSpiralMatrix(3));
console.log(getSpiralMatrix(4));
