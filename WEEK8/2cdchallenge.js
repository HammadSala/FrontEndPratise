// Description
// Write a function which accepts only one argument . 
// But you want to pass a variable  number of  arguments to this function and 
// want the function to return the sum of those provided arguments.

// Design a function in such a way using the rest operator that it accepts all provided arguments 
// into a single variable and then add those elements and return their sum.

function sum(...allnumbers){
    let sum = 0;
    for ( i = 0; i < allnumbers.length ; i++) {
        sum += allnumbers[i];
    }
    return sum;
}

const ssum = sum(10, 30, 45, 80);

console.log(ssum);
