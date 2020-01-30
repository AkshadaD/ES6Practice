/* Destructuring simply implies breaking down a complex structure into simpler parts. 
In JavaScript, this complex structure is usually an object or an array. 
With the destructuring syntax, you can extract smaller fragments from arrays and objects. 
Destructuring syntax can be used for variable declaration or variable assignment.
You can also handle nested structures by using nested destructuring syntax. */

//1.object destructuring
let person = {
    name:"abc",
    age:23
}
const {name, age, addr="xyz"} = person;
console.log(`name is ${name}, age = ${age} addr = ${addr} `);



//2.object destructuring
const person1 = {
    name:"john doe",
    country:"canada"
}
console.log(person1);
const {name:fullname, country:place, age:years=27} = person1;
console.log(`I am ${fullname} from ${place} and I am ${years} years old`);
console.log(person1);



//3.object destructuring(nested)
const student ={
    sname: "John",
    age:17,
    marks: {
        maths:78,
        chem: 85
    }
}

const {sname, marks:{maths, physics=80}} = student;
console.log(`${sname} scored ${maths} in maths and ${physics} in physics`);

/*When using nested object destructuring, be careful to avoid using an empty nested object literal.
 Though it is valid syntax, it actually does no assignment. */
const {marks:{}} = student;


//1.array destructuring 
const arr = [255,0,123];
const [red, green, blue] = arr;
console.log(`red= ${red} green= ${green} blue= ${blue}`);


//2.Array destucturing (defualt values)
const rgb = [255, 0];
const [r, g, b=142] = rgb;
console.log(`r= ${r} g= ${g} b= ${b}`);


//3.Array destucturing (skipping items)
const rgb3 = [200, 255, 100];
// Skip the first two items
// Assign the only third item to the blue variable
const [,, blue3] = rgb3;
console.log(`Blue: ${blue3}`); // Blue: 100



//4.Array destucturing (Swapping variables)
let width = 300;
let height = 500;
const landscape = true;

console.log(`width = ${width}   height = ${height}`);

if(landscape){
     [width, height] = [height, width];
    console.log(`width = ${width}  height = ${height}`);
}


//5.Array destucturing
const color = ['#FF00FF', [255, 0, 255], 'rgb5(255, 0, 255)'];

// Use nested destructuring to assign red, green and blue
const [hex, [red5, green5, blue5]] = color;

console.log(hex, red5, green5, blue5);