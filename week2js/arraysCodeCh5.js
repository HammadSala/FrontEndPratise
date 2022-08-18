/*
Store the given numbers in an array 33,45,2,88,36,17,81,50,28.

Sort and print the original array  in lexicographical order.
Sort and print the number in the ascending order and print them.
Add two more numbers to the array 105,501.
Sort the array again and make an array of the largest five numbers from the above array using array’s methods.

*/

var arr = [33,45,2,88,36,17,81,50,28];

console.log ( "Lexicographical or default Sorted Array is -> ", (arr.sort()));

console.log ( "Ascending  Sorted Array is -> ", 
arr.sort(function (x, y) {
    return x - y;
})
);

arr.unshift(105,501);

console.log ( "Descending Sorted Array is -> ", 
(arr.sort(function(x, y){
    return y -x;
}
))
);

var ascendArray = function (x, y) {
    return x- y;
}

arr.sort(function (x, y) {
    return y - x;
});

console.log("Descending Sorted array first 5 elements", arr.slice(0,5));