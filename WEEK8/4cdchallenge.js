// Description
// Create a map containing the details of a person as a key value pair in it.

// Map have firstname,lastname,city,mobilenumber as the key and take some demo data as their value to insert that in the map.

// Now print all keys once and  values once separately present  in the map without using any loop statement.

var personMap = new Map ([ ["firstName" , "Sam"], ["lastName" , "Nanda"], [ "mobileNo" , "9872394293"]  ]);

console.log( personMap.keys());
console.log( personMap.values());

for ( let item of personMap){
    console.log(item);
}