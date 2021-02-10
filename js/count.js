var counter = function(array) {
    return 'There are ' + array.length + ' elements in this array.';
};

//console.log(counter(['m', 'e', 'i', 'f', 'f']));

//available outside of this module
module.exports = counter;