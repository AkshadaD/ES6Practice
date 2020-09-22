//rest
/* It is a collection of all remaining elements 
(hence, the name rest, as in “the rest of the elements”) into an array. */

console.log("\n rest in array");
var names = ["John", "Bob", "Marina", "Mady"];
const [firstname, ...familyName] = names;
console.log(firstname);   //John
console.log(familyName); //[ 'Bob', 'Marina', 'Mady' ]


//rest in function
console.log("\n rest in function");
function myData(...args){
    console.log(args);
}
myData("John", 25, "web developer");  //[ 'John', 25, 'web developer' ]



//spread
/* It’s the opposite to rest parameter , where rest parameter collects items into an array, 
the spread operator unpacks the collected elements into single element. */

console.log("\n spread to copy one array into another")
let myNames = ["John", "Bob", "Marina"];
console.log(myNames);
//without spread
let newNames = [myNames, "Mady", "Ron"];
console.log("without spread: ");
console.log(newNames);  //[ [ 'John', 'Bob', 'Marina' ], 'Mady', 'Ron' ]
//with spread
let newNames1 = [...myNames, "Mady", "Ron"];
console.log("with spread: ");
console.log(newNames1);  // [ 'John', 'Bob', 'Marina', 'Mady', 'Ron' ]

//concat two arrays
console.log("\n concat two arrays");
let names1 = ["John", "Bob", "Marina"];
let names2 = ["Mady", "Ron"];

let resArr1 = names1.concat(names2); //without spread
console.log("resArr1 without spread",resArr1); //[ 'John', 'Bob', 'Marina', 'Mady', 'Ron' ]
let resArr2 = [...names1, ...names2]; //with spread
console.log("resArr2 with spread",resArr2); //[ 'John', 'Bob', 'Marina', 'Mady', 'Ron' ]

