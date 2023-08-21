const FIZZ = 'fizz'
const BUZZ = 'buzz'
const FIZZBUZZ = 'fizzbuzz'

/** 
 * Returns true when n is divisible by 3 
 * @param {Number} n
 * @returns {Boolean} fizziness 
 * */
function isFizz(n) {
  return n % 3 === 0
}

/**
 * Returns true when n is divisible by 5
 * @param {Number} n 
 * @returns {Boolean} buzziness
 */
function isBuzz(n) {
  return n % 5 === 0
}

/**
 * Returns true when a number is divisible by 3 and 5
 * @param {Number} n
 * @returns {Boolean} fizzbuzziness
 */
function isFizzBuzz(n) {
  return n % 3 === 0 && n % 5 === 0
}

/**
 * Generates a results object describing a sequence of fizz buzz for count.
 * @param {Number} count 
 * @returns {Object} with properties count, fizz, buzz, and fizzbuzz
 */
function fizzBuzz(count) {
  let result = { count, fizz: 0, buzz: 0, fizzBuzz: 0 }
  for (let i = 1; i <= count; i++) {
    if (isFizzBuzz(i)) result.fizzBuzz++;
    else if (isFizz(i)) result.fizz++;
    else if (isBuzz(i)) result.buzz++;
  }
  return result
}

function customFizzBuzz(count, multipleA, stringA, multipleB, stringB) {
  let result = { count };

  for (let i = 1; i <= count; i++) {
    let str = '';

    if (i % multipleA === 0) {
      str += stringA;
    }
    else if (i % multipleB === 0) {
      str += stringB;
    }
    else if (str === '') {
      str = i.toString();
    }

    result[str] = (result[str] || 0) + 1;
  }

  return result;
}

module.exports = {
  isFizz,
  isBuzz,
  isFizzBuzz,
  fizzBuzz,
  customFizzBuzz,
  FIZZ,
  BUZZ,
  FIZZBUZZ
};

