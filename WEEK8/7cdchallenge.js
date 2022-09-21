// Description
// Create a piece of code in js to store the dummy data given below as  key value pairs in localstorage of the browser.

// And then access those items from local Storage  and print them in the console .

 

// Data-

 

// Key- ‘User’,value-{name:”Ujjawal”}
// Key-’Number’,value-100
// key-’City’,value-’Delhi’

localStorage.setItem('user',JSON.stringify( {name:'Ujjawal'} ))
localStorage.setItem('Number',JSON.stringify( {number:'value-100'} ))
localStorage.setItem('City',JSON.stringify( {City:'value-Delhi'} ))

var ob = JSON.stringify(localStorage)
var keys = Object.keys(localStorage);
localStorage.setItem('keys', JSON.stringify(ob))

for (let element of keys) {

    if ( element == 'user' || element =='Number' || element =='City'){
        console.log()
    }
}