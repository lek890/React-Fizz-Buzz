export default class FizzBuzz {

    static spec = [[15, "FizzBuzz"], [5, "Buzz"], [3, "Fizz"]];
    
    static *buzz(size) {
        for (let i of Array(size).keys()) { 
            i = i + 1;
            // eslint-disable-next-line
            const [_index,result] = FizzBuzz.spec.find(([n, s]) => i % n === 0) || [0,i.toString()];
            yield result;
        }
    }
}