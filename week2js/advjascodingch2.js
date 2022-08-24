// Description
// Write a program having four methods -

// One for printing some values say two values one is string and one is number.
// One for calculating area of square,this method will be expecting one parameter i,e. edge of square.Pass the area of square to the print method as second parameter to it,First parameter will be “Area of square is: “. The final output should be “Area of square is : calculatedArea”.
// One for calculating area of rectangle,this method will be expecting two parameters i.e, length and width of rectangle.Pass the area of rectangle to the print method as second parameter to it,First parameter will be “Area of rectangle  is: “. The final output should be “Area of rectangle is : calculatedArea”.
// One for calculating area of circle,this method will be expecting one parameter i.e ,radius of circle.Pass the area of circle to the print method as second parameter to it,First parameter will be “Area of circle is: “. The final output should be “Area of square is : calculatedArea”.



// The print method we created in step 1 will be set as a prototype function object to rest three functions.

// (Use object.setPrototypeof(squaremethod,printMethod) like this to set a prototype function to another function.)

// Then call the methods for each square,rectangle and circle and inside them call the print method with proper input parameters to it.

// (You can access the function set as prototype to another function simply by calling that prototype function with its name and parameter.)


function print ( msg, area) {
    console.log(msg,area);
}

function areaSquare( side) {
    var a = side*side;
    // print(func("Square area"), a);
    print("Area of square is : " , a);
}

function areaCircle ( radius,) {
    var a = 2.314*radius*radius;
    print("Area of Circle is :", a);
}

function areaRectangle ( length, Breadth ) {
    var a = length * Breadth;
    print("Area of rectagnle is : ", a);
}

areaSquare(5,print);
areaCircle(2,print);
areaRectangle(3,7);

Object.setPrototypeOf(areaCircle, print);
Object.setPrototypeOf(areaRectangle, print);
Object.setPrototypeOf(areaSquare, print);

// areaSquare

areaSquare(5);
areaCircle(2);
areaRectangle(3,7);