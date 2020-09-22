// 'use strict';
(function(){
    var a = b = 3;
})();
  
  console.log(typeof a, "a defined? " + (typeof a !== 'undefined'));
  console.log(typeof b , "b defined? " + (typeof b !== 'undefined'));

const rabit = {
  jumps: {
    value: true
  }
}

console.log("rabit.jumps: ", rabit.jumps);
