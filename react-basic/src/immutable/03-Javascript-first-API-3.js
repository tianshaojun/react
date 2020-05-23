const { Seq } = require('immutable');

const myObject = { a: 1, b: 2, c: 3 };
const seq = Seq(myObject).map(v => v * v);
const seqToObject = seq.toObject();
console.log(seq, seqToObject);