/* 
---> Promises are used to handle asynchronous operations in JavaScript. They are easy to manage 
when dealing with multiple asynchronous operations where callbacks can create callback hell 
leading to unmanageable code. 

--->Imagine that you’re a top singer, and fans ask day and night for your upcoming single.

---> To get some relief, you promise to send it to them when it’s published. You give your 
fans a list. They can fill in their email addresses, so that when the song becomes available, 
 all subscribed parties instantly receive it. And even if something goes very wrong, say, 
 a fire in the studio, so that you can’t publish the song, they will still be notified.

--->Everyone is happy: you, because the people don’t crowd you anymore, and fans, 
    because they won’t miss the single.

This is a real-life analogy for things we often have in programming:
    1. A “producing code” that does something and takes time. For instance, 
     some code that loads the data over a network. That’s a “singer”.
    2. A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.
    3. A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: 
    this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes 
    that result available to all of the subscribed code when it’s ready.

*/

//resolve
let promise = new Promise((resolve, reject) => {
    console.log("in promise1");
   // resolve(console.log("done"));   //done (prints after above line)
   setTimeout(() => {resolve("promise1 done")} ,2000 );
});
//promise.then(console.log);

//reject
let promise2 = new Promise((resolve, reject) => {
    console.log("In promise2");
    reject("promise2 rejected");
});
console.log("outside promise2");
promise2.catch(console.log);


/*
---> Promises can be consumed by registering functions using .then and .catch methods.
*/


//resolve and reject
let promise3 = new Promise( (resolve, reject) => {
    let x=10, y=15;

    console.log("In promise3");
    if(x!== y){
        resolve();
    }
    else{
        reject();
    }
});

promise3.then( () => {
    console.log("x and y are not equal")
}).catch( () => {
    console.log("x and y are equal")
});


//fetch 
var ex = fetch('https://reqres.in/api/users?page=1')
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
    console.log("error");
})