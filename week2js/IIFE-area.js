const rectArea = function(x, y){
    return x*y;

}(5,10);

const squareArea = function(x){
    return x*x;

    }(10);

const circleArea = (function(x){
    return 3.14*x*x;

    }(10));

console.log('REctanlge Area', rectArea);
console.log('Square Area', squareArea);
console.log('Circle Area', circleArea);