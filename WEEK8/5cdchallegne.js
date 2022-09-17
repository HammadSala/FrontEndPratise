// Description
// Create a function add  that takes three arguments : 
// first and second one are numbers and third one is a function 
// which prints a value passed to it as an argument.

 

// Now use the function add defined above to add two numbers (first and second argument) 
// and print the result after 10 s delay using the third argument function.

function sum(  a, b , callback) {
    setTimeout( ()=> {
        callback(a+b);
    }, 5000)

}

function callback( su) {
    console.log(su);
}

sum( 10, 3, callback);