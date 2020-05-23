const { Map, is } = require('immutable');

const originalMap = Map({ a: 1, b: 2, c: 3 });
const updatedMap = originalMap.set('b', 1000);
console.log(updatedMap !== originalMap);
//true

const anotherUpdateMap = originalMap.set('b', 1000);
console.log(anotherUpdateMap !== updatedMap);
console.log(anotherUpdateMap.equals(updatedMap));
console.log(is(anotherUpdateMap, updatedMap));
//true
//true
//true

