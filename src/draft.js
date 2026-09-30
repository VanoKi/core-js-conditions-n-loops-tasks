/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  const shuffle = (input) => {
    let odd = '';
    let even = '';

    for (let i = 0; i < input.length; i += 1) {
      if (i % 2 === 0) {
        even += input[i];
      } else {
        odd += input[i];
      }
    }
    return even + odd;
  };
  for (let i = 0; i < iterations; i += 1) {
    result = shuffle(result);
  }
  return result;
}
console.log(shuffleChar('012345', 1));
