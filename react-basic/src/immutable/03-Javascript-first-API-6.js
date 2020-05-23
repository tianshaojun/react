const { Map, List } = require('immutable');

const mapped = Map({ a: 1, b: 2, c: 3 });
console.log(mapped.map(x => x * x));
console.log(mapped.map(function (x) {
    return x * x
}))

const aList = List([1, 2, 3]);
const anArray = [0, ...aList, 4, 5];
console.log(anArray);