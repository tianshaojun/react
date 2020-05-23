const { Map } = require('immutable');
const map1 = Map({
    a:1,
    b:2,
    c:3
});
const map2 = map1.set('b', 50);
console.log(map1.get('b') + ' vs. ' + map2.get('b'));
console.log(map1 + ' vs. ' + map2);
//2 vs. 50
//Map { "a": 1, "b": 2, "c": 3 } vs. Map { "a": 1, "b": 50, "c": 3 }