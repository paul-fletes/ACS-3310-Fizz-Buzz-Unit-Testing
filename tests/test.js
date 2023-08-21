const { test } = require('node:test');
const fizzbuzz = require('../fizzbuzz');

// test('Sanity check', () => {
//   expect(2 + 2).toBe(4);
// })

test("constant 'FIZZ' is correctly named 'FIZZ'", () => {
  expect("FIZZ").toBe("FIZZ");
})
test("constant 'BUZZ' is correctly named 'BUZZ'", () => {
  expect("BUZZ").toBe("BUZZ");
})
test("constant 'FIZZBUZZ' is correctly named 'FIZZBUZZ'", () => {
  expect("FIZZBUZZ").toBe("FIZZBUZZ");
})
test("#isFizzy returns true if number is divisible by 3", () => {
  expect(fizzbuzz.isFizzy(3)).toBe(true);
})
test("#isBuzzy returns true if number is divisible by 5", () => {
  expect(fizzbuzz.isBuzzy(5)).toBe(true);
})
test("#fizzyBuzzy returns 'fizz' if number is divisible by 3", () => {
  expect(fizzbuzz.fizzyBuzzy(9)).toBe("fizz");
})
test("#fizzyBuzzy returns 'buzz' if number is divisible by 5", () => {
  expect(fizzbuzz.fizzyBuzzy(25)).toBe("buzz");
})
test("#fizzyBuzzy returns 'fizzbuzz' if number is divisible by 3 and 5", () => {
  expect(fizzbuzz.fizzyBuzzy(30)).toBe("fizzbuzz");
})
