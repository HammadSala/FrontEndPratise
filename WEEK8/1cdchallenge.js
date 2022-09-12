// Write a function called displayName() that takes an object as an argument and 
//prints the person's first and last name. Use object destructuring in the function argument. 
//And also, use template strings when printing the first and last name.

// Ex object is-

 

//  const person = {

//       first: 'Virat',

//       last: 'Kohli',

//       twitter: '@vkohli',

//       company: 'Cricketer'

//   }

//----------------------------

const person = {
    first : 'Virat',
    last : 'Kholi',
    twitter: '@vkohli',
    company: 'Cricketer'
}

function displayName( {first, last}) {
    // console.log(first + " --> " + last);
    console.log(`${first} --> ${last}`);
}

const { first, last } = person;
// displayName(first, last);

displayName(person);