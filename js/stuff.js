/* 
var pi = 3.142;

var counter = function(array) {
    return 'There are ' + array.length + ' elements in this array.';
};

var adder = function(num1, num2) {
    return `The sum of the 2 numbers is ${num1 + num2}`;
}; 


module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi; 
*/


//shortcut
//module.exports = {counter, adder, pi};

/* ------------------------------------------ */

//another way
module.exports.pi = 3.142;

module.exports.counter = function(array) {
    return 'There are ' + array.length + ' elements in this array.';
};

module.exports.adder = function(num1, num2) {
    return `The sum of the 2 numbers is ${num1 + num2}`;
}; 
