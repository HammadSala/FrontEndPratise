// Write a program in JavaScript to print the below given pattern-

 

// *****

// ****

// ***

// **

// *

// **

// ***

// ****

// *****
var arr = "*****";
var arr1 = "*****";

var i = 5;

function decrement( i ) {
    while (i >= 1){
        console.log(arr.substring(0,i));
        i--;

    }
    var j = 1;
    do {
        console.log(arr1.substring(0,j));
        j++;
    }while (j <= 5)
}

decrement(i);




