//Generator
/* 
---> Regular functions return only one, single value (or nothing).
    Generators can return (“yield”) multiple values, one after another, on-demand. 
---> Generator functions behave differently from regular ones. 
    When such function is called, it doesn’t run its code. 
    Instead it returns a special object, called “generator object”, 
    to manage the execution.
---> The main method of a generator is next(). When called, it runs the 
    execution until the nearest yield <value> statement (value can be omitted, 
    then it’s undefined). 
    Then the function execution pauses, and the yielded value is returned 
    to the outer code.
---> The result of next() is always an object with two properties:
    value: the yielded value.
    done: true if the function code has finished, otherwise false.

*/

function* GeneratorSequence(){
    yield 1;
    yield 2;
    return 3;
}

let generator = GeneratorSequence();
console.log("generator: ",generator);

let one = generator.next();
console.log("one: ",JSON.stringify(one));   // {"value":1,"done":false}

let two = generator.next();
console.log("two: ",JSON.stringify(two));  // {"value":2,"done":false}

let three = generator.next(); 
console.log("three: ",three);     //without stringify = { value: 3, done: true }
console.log("three1: ",JSON.stringify(three)); // with stringify = {"value":3,"done":true}

//---> Generators are iterable
// for(let value of generator){
//     console.log(value);  //1 and then 2
// }

function* GenerateSeq(){
    yield 1;
    yield 2; 
    yield 3;
    yield 4;
}

let generator2 = GenerateSeq();

// iterating generator2 using for...of
console.log("iterating generator2 using for...of ");
for(let value of generator2){
    console.log( value );       // 1    2   3   4
}

// using spread operator
console.log("Using spread operator");
let seq = [0, ...GenerateSeq()];
console.log(seq);   // [ 0, 1, 2, 3, 4 ]



