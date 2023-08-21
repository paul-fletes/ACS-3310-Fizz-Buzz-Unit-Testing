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
// describe('#customFizzBuzz function', () => {
//   test('generates foo and bar counts correctly', () => {
//     const result = customFizzBuzz(20, 3, 'foo', 5, 'bar');
//     expect(result.count).toBe(20);
//     expect(result.foo).toBe(5);
//     expect(result.bar).toBe(3);
//     expect(result.foobar).toBe(1);
//     expect(result['']).toBe(11);
//   });

//   test('handles custom multiples and strings', () => {
//     const result = customFizzBuzz(15, 2, 'even', 7, 'odd');
//     expect(result.count).toBe(15);
//     expect(result.even).toBe(7);
//     expect(result.odd).toBe(3);
//     expect(result.evenodd).toBe(1);
//     expect(result['']).toBe(4);
//   });

//   test('handles different count values', () => {
//     const result = customFizzBuzz(5, 3, 'fizz', 5, 'buzz');
//     expect(result.count).toBe(5);
//     expect(result.fizz).toBe(1);
//     expect(result.buzz).toBe(1);
//     expect(result.fizzbuzz).toBe(0);
//     expect(result['']).toBe(3);
//   });

//   test('handles multipleA being equal to multipleB', () => {
//     const result = customFizzBuzz(10, 2, 'even', 2, 'twice');
//     expect(result.count).toBe(10);
//     expect(result.even).toBe(5);
//     expect(result.twice).toBe(5);
//     expect(result['']).toBe(0);
//   });
// });
