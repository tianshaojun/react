const { fromJS } = require('immutable');
const nested = fromJS({ a: { b: { c: [3, 4, 5] } } });
// console.log(nested);

const nested2 = nested.mergeDeep({ a: { b: { d: 6 } } });
// console.log(nested2);
// console.log(nested2.getIn(['a', 'b', 'd']));  
//6

const nested3 = nested2.updateIn(['a', 'b', 'd'], value => value + 1);
// console.log(nested3);

const nested4 = nested3.updateIn(['a', 'b', 'c'], list => list.push(6));
// console.log(nested4);



