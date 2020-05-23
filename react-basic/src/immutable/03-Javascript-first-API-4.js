const { fromJS } = require('immutable');

const obj = {
    1: 'one',
    2: 'two',
    3: {
        4: 'four',
        5: 'five',
        6: {
            7: 'seven'
        }
    }
};
const obj2 = {
    1: 'one',
    2: 'two',
    3: {
        4: 'four',
        5: 'five',
        6: {
            7: 'seven'
        }
    }
};
console.log(Object.keys(obj));   //['1','2','3']
console.log(Object.keys(obj2));  //['1','2','3']
console.log(obj['1'], obj[1]);   //one one

const map = fromJS(obj);
const map2 = fromJS(obj2);
console.log(map.get('1'), map.get(1));   //one undefined
console.log(obj === obj2, map.equals(map2), map === map2);   //false true false