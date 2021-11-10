const cnf = require('./clone-and-freeze');

a = {'shir': 'is', 'the': 'best'};
b = cnf.cloneAndFreeze(a);

console.log(a);
console.log(b);
b['shir'] = 'not';
console.log(b);
