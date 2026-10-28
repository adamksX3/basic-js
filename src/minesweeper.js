const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let row = 0; row < matrix.length; row++) {
    const resultRow = [];

    for (let col = 0; col < matrix[row].length; col++) {
      let minesAround = 0;

      for (let stepRow = -1; stepRow <= 1; stepRow++) {
        for (let stepCol = -1; stepCol <= 1; stepCol++) {
          if (stepRow === 0 && stepCol === 0) continue;

          const neighborRow = matrix[row + stepRow];
          if (neighborRow && neighborRow[col + stepCol] === true) {
            minesAround += 1;
          }
        }
      }

      resultRow.push(minesAround);
    }

    result.push(resultRow);
  }

  return result;
}

module.exports = {
  minesweeper
};
