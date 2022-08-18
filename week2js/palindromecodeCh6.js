/*
Write a program which has a function  to check whether the given string i.e, abcaaaaaacba is a palindrome or not.

If the string is palindrome then print,”Given String is Palindrome”
Else print “Given String is not a palindrome”

*/

var str = "1234567";
var strArrya = str.split('');
// console.log(strArrya);
// console.log(strArrya.reverse());

if ( strArrya == strArrya.reverse().join('') ) {
    console.log("REverse ,, its a palindrome");
    console.log(strArrya);
    console.log(strArrya.reverse());
} else {
    console.log("its not");
}

var flag = false;

// if ( strArrya = strArrya.reverse() ) {
//     console.log("its a palindrom");
// } else {
//     console.log(" No ");
// }

for  ( var i = 0 ; i < strArrya.length/2 ; i ++) {

    console.log(strArrya[i]);
    console.log(strArrya[strArrya.length-1-i]);
    if ( strArrya[i] != strArrya[strArrya.length-1-i] ) {
        // console.log("Not a palindrome " + " \t" + strArrya[i] + " \t " + strArrya[strArrya.length-1-i]  );
        flag = false;
        break;
    } 

}
if (flag === true ){
    console.log("Its a palindrome");
} else if (flag === false) {
    console.log("Its not a palindrome");
}

// var tempArray = str.split('');
// var reveArray = tempArray.reverse();

// console.log( tempArray + "\n" + reveArray );



// if ( tempArray === reveArray) {
//     console.log("Its a Palindrome");

// } else {
//     console.log("its not a palindrome");
// }
// var tempstr = str.split('');
// let temp =[];

// for ( i = 0, j= tempstr.length ; i < tempstr.length ; i++) {
//     temp[i] = tempstr[j];
//     j--;
// }

// console.log(tempstr);
// console.log(str);

// var tempStr = str.split();
// console.log("reverse", str.length);
// var firstH = str.substring(0,str.length/2);
// var secondH = str.substring(str.length/2, str.length);

// console.log(" First and Second" , firstH ,"\n", secondH);