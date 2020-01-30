let x=6, y=5;

const result = (x,y) => {
    return x*y;
}
console.log(result(x,y));


//
var cat = {
    lives: 9,
    jumps: () => {
      this.lives--;
      
    }
  }
  cat.jumps();
  console.log(this.lives);


//anonymous 1
(function (){
    console.log("m in anonymous");
}())

//anonymous 2
const res = function(){
    console.log("hello...");
}

res();
