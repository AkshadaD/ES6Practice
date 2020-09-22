function first(callback){
    console.log("In first fun before");
    callback();
    console.log("In first fun after");
}

function second(){
    console.log("In sencond before");
    
    setTimeout(() => {console.log("In second fun setTimeout");
    }, 400);
}   

first(second);

// function func1(){
//     console.log("In func1");
//     func2();
// }

// function func2(){
//     setTimeout(() => {console.log("In func2")}, 1000);
// }

// func1();

  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }
  
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert( _ ); // function declared in the loaded script
  });