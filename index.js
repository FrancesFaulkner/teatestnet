
const _ = require('lodash');

function calculateSquare(number) {
  if (_.isNumber(number)) {
    return number * number;
  } else {
    throw new Error("Invalid input. Please enter a valid number.");
  }
}

module.exports = calculateSquare;