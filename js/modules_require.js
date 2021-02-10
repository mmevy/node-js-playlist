/* 
//we call this module here

 var counter = require('./count');

//the code line giving error before module.exports 
console.log(counter(['m', 'e', 'i', 'f', 'f']));
*/

/* var st = require('./stuff');

console.log(st.counter(['m', 'e', 'i', 'f', 'f']));
console.log(st.adder(3, 5));
console.log(st.adder(3, st.pi)); */



//shortcut
var {counter, adder, pi} = require('./stuff');

console.log(adder(pi, 9));


