const { Map } = require('immutable');
const originalMap = Map({ a: 1, b: 2, c: 3 });
const updateMap = originalMap.set('b', 2);
console.log(updateMap === originalMap);
//true
