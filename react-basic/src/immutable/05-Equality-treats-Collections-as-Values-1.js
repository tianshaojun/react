const { Map, Set } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = Map({ a: 1, b: 2, c: 4 });
const set = Set().add(map1).add(map2);
// console.log(set);
// console.log(set.has(map2));
// console.log(set.union());
// console.log(set.subtract([map1]));
console.log(Set.intersect([Set([1, 2, 3]), Set([1, 3, 4])]));
//true
