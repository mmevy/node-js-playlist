//normal function statement
function sayHi(){
    console.log('Hi there!');
}

sayHi();

//function expressions 
//(nameless function = anonymous function and this is equals to a variable)
var sayBye = function () {
  console.log('Bye!');  
};

sayBye();

//passing function from one thing to another
function calledFunc(anotherFunction) {
    anotherFunction();
}

calledFunc(sayBye);