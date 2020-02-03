
//1. Remove duplicates from aray

var arr = [10,10, 20, 20, 30, 30, 30, 20, 40];
console.log("Array with duplicates: " +arr);

var set = new Set(arr);
console.log(set);
for(let values of set){
    console.log(values);
}
console.log("1st indexed ele id: " +Array.from(set)[1]);

//map
var map=new Map();  
map.set(1,"jQuery");  
map.set(2,"AngularJS");  
map.set(3,"Bootstrap");  
console.log(map);

//2. remove specific object from array of objects. eg.-remove b:40 from objArr

var objArr = [
    {a:20},
    {b:40},
    {c:60}
];
console.log(objArr);

//1st way
// for(var arrKeys in objArr){
//    delete objArr[arrKeys].b; 
// }

//2nd way
objArr.splice(1,1);

console.log(objArr);


//3. Insert and delete elements from array 
var arr1 = [10,20,30];
console.log(arr1);

//insert at last position
arr1.push(40);
console.log("arr after inserting an ele to the last position: " +arr1);

//insert at first position
arr1.unshift(50);
console.log("arr after inserting an ele to the first position: " +arr1);

//remove last element
arr1.pop();
console.log("arr after deleting last element: " +arr1);

//remove first element
arr1.shift();
console.log("arr after deleting first element: " +arr1);

//insert element at middle position





let person = {
    name: "abc",
    age: 20
} 

const {name} = person;



















// var a = 10;
// var b = a;
// console.log(a +"   " +b);
// a = 15;
// console.log(a +"   " +b);
// b=20;
// console.log(a +"   " +b);