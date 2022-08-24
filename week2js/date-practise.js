// Write a program to do the below operations in js-

// Create a date object of the date (6 Jun, 2021)
// Create a date object of the year 2000 to do the next operation.
// Check whether the given date(6 Jun,2021) is after or in the year 2000.

var date1 = new Date(2021, 5, 6 );
console.log(date1);

var date2000 = new Date(2000,1,1);
console.log(date2000);

if ( date1 < date2000 )
{
    console.log(date1 + " is before " + date2000);
} else {
    console.log(date1 + " is after " + date2000);
}

