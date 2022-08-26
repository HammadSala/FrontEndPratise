// Write a function which takes two parameters a and b and return the value of a/b.

// You are required to throw the error("Only Numbers are allowed and divisor should be greater than 0 ")  if a or b is not a number or if b is not greater than 0.

// Else print the (“Answer after dividing a by b will be,answer);

// You should call the above function at least 2 time with different value of a and b to cover all edge cases


function sumof2numbers( a , b ) {
if ( b > 0 ){
        if ( typeof a === 'number' && typeof b === 'number' ) {
            return a/b;
        } 
        else {
            throw new " a or b or both a and b are not a number";
        }
    } 
    else {
        throw new " Divide by Zero Error";
    }
}
try {
console.log(sumof2numbers(2,3));
// console.log(sumof2numbers(2,0));
console.log(sumof2numbers("sdfs",4));
} catch ( Error ) {
    console.log(Error.message);
}