import FizzBuzz from './FizzBuzz';

it('returns the number if not divisible by 3,5 or 15 ', () => {
    var limit = 2;
    var expected = ["1", "2"];
    var result = Array.from( FizzBuzz.buzz(limit) )
    expect(result[0]).toEqual("1");
  });

  it('gives correct output for divisible by 15', () => {
    var limit = 15;
    var result = Array.from( FizzBuzz.buzz(limit) )
    expect(result[14]).toEqual('FizzBuzz');
  });

  it('gives correct output for divisible by 3', () => {
    var limit = 4;
    var result = Array.from( FizzBuzz.buzz(limit) )
    expect(result[2]).toEqual('Fizz');
  });

  it('gives correct output for divisible by 5', () => {
    var limit = 5;
    var result = Array.from( FizzBuzz.buzz(limit) )
    expect(result[4]).toEqual('Buzz');
  });

  it('gives the result set of type array', () => {
    var limit = 5;
    var result = Array.from( FizzBuzz.buzz(limit) )
    expect(result).toEqual([ "1", "2", "Fizz", "4", "Buzz"]);
  });