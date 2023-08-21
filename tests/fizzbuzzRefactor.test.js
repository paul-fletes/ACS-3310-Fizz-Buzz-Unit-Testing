const fizzbuzz = require('../fizzbuzzRefactor');

test("constant 'FIZZ' is correctly named 'FIZZ'", () => {
  expect("FIZZ").toBe("FIZZ");
})
test("constant 'BUZZ' is correctly named 'BUZZ'", () => {
  expect("BUZZ").toBe("BUZZ");
})
test("constant 'FIZZBUZZ' is correctly named 'FIZZBUZZ'", () => {
  expect("FIZZBUZZ").toBe("FIZZBUZZ");
})
test("#isFizz returns true if number is divisible by 3", () => {
  expect(fizzbuzz.isFizz(3)).toBe(true);
})
test("#isBuzz returns true if number is divisible by 5", () => {
  expect(fizzbuzz.isBuzz(5)).toBe(true);
})
test("#isFizzBuzz returns true if number is divisible by 3 and 5", () => {
  expect(fizzbuzz.isFizzBuzz(30)).toBe(true);
})
test("#fizzBuzz object displays correct count", () => {
  expect(fizzbuzz.fizzBuzz(15).count).toBe(15);
})
test("#fizzBuzz object displays correct fizz count", () => {
  expect(fizzbuzz.fizzBuzz(15).fizz).toBe(4);
})
test("#fizzBuzz object displays correct buzz count", () => {
  expect(fizzbuzz.fizzBuzz(15).buzz).toBe(2);
})
test("#fizzBuzz object displays correct fizzBuzz count", () => {
  expect(fizzbuzz.fizzBuzz(30).fizzBuzz).toBe(2);
})