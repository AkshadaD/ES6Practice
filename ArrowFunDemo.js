let x=6, y=5;

const result = (x,y) => {
    return x*y;
}
console.log(result(x,y));  //30


//
var cat = {
    lives: 9,
    jumps: () => {
      console.log("Inside lives--: ", this.lives);
      this.lives--;
      console.log("Inside lives: ", this.lives);
    }
}
  cat.jumps();
  console.log("Ouside lives: ",this.lives); //NaN


//anonymous 1
(function (){
    console.log("m in anonymous"); //m in anonymous
}())

//anonymous 2
const res = function(){
    console.log("hello..."); //hello...
}

res();

/*---> Unlike regular functions, arrow functions do not have their own this. */
//with this
let user = {
  name:"abc",

  //normal function
  show1(){
    console.log("In normal fun: " +this.name);    //'this' binding works here
                                                  //In normal fun: abc
  },

  //arrow function
  show2: () => {
    console.log("In arrow fun: " +this.name);    //no 'this' binding
                                                //In arrow fun: undefined
  }

  // //arrow function
  // show2() {
  //   setTimeout(()=> {console.log("In arrow fun: " +this.name);},500);
  // }
}

user.show1();
user.show2();


/* ---> Arguments objects are not available in arrow functions, 
        but are available in regular functions.  */



//
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(
      student => console.log(this.title + ': ' + student)
    );
  }
  //Our Group: John
  //Our Group: Pete
  //Our Group: Alice
};

group.showList();