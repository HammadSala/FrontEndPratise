// Write a program to do the below operations-

// Consider the given values for the below operations 5,78,23,41,67,84,22,10,1.
// From the given values find the minimum and maximum number out of them without using sorting or sort method and also without looping over them.
// Write a method to find the mean value(in decimal point if any) of the above numbers and print the ceil of that value.

var arr = [5,78,23,41,67,84,22,10,1];

console.log( "Minimum -> " + Math.min.apply(null, arr) );
console.log( "Max -> " + Math.max.apply(null, arr) );
var sumfun = (function(){var sum = 0;
for ( let i =0; i < arr.length ; i++ ){
    sum+=arr[i];
}
return sum});

console.log("Mean of the nos is " + sumfun() + "  " + Math.round(sumfun()/arr.length));