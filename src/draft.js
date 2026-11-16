/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const result = matrix;
  const size = result.length;

  for (let layer = 0; layer < size / 2; layer += 1) {
    const last = size - 1 - layer;

    for (let index = layer; index < last; index += 1) {
      const offset = index - layer;
      const temp = result[layer][index];

      result[layer][index] = result[last - offset][layer];
      result[last - offset][layer] = result[last][last - offset];
      result[last][last - offset] = result[index][last];
      result[index][last] = temp;
    }
  }

  return result;
}
console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
