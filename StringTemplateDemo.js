//without string literal
let person1 = {
    name: "abc1",
    age: 23,
    addr: "xyz1"
}

console.log("my name is " +person1.name +" and addr is " +person1.addr);




//with string template literal
let person = {
    name: "abc",
    age: 20,
    addr: "xyz"
}

console.log(`Hello...my name is ${person.name} and addr is ${person.addr}`);

var comp = "sedtrfgyuh";

console.log(`I am working in ${comp}`);