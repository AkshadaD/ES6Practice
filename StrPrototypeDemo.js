/* For instance, we have a user object with its properties and methods, 
and want to make admin and guest as slightly modified variants of it. 
We’d like to reuse what we have in user, not copy/reimplement its methods, 
just build a new object on top of it.

--> In JavaScript, objects have a special hidden property [[Prototype]] 
(as named in the specification), that is either null or references another 
object. That object is called “a prototype”

--> The prototype is a little bit “magical”. When we want to read a property 
from object, and it’s missing, JavaScript automatically takes it from the
prototype. In programming, such thing is called “prototypal inheritance”.

-->__proto__ is not the same as [[Prototype]]. It’s a getter/setter for it.

*/
String.prototype.distance = function (char) {
    var index = this.indexOf(char);

    if (index === -1) {
        console.log(char + " does not appear in " + this);
    } else {
        console.log(char + " is " + (this.length - index) + " characters from the end of the string!");
    }
};

"Hello".distance("H");

let animal = {
    eats: true
}

let rabit = {
    jump: true
}

rabit.__proto__ = animal;

console.log(rabit.eats);
console.log(rabit.jump);

