// log3();
// console.log(1);
//
// function log3(){
//     console.log(3);
// }
// console.log(2);

console.log("hi");

setTimeout(function timeout(){
    console.log("click the button");
}, 5000)

console.log("welcome to loupe")




//sync
// log
// for loop
// const let
// if else
// function

//async
// setTimeout()
// setInterval()
// promise
// async/await
// onclick,onchange,oninput



// setTimeout(param11, param22)
// param1 = function() {}
// param2 = timer
const body = document.body
body.style.backgroundColor = "red"
setTimeout(() => {
    console.log("green")
    body.style.backgroundColor = "yellow"
    },
3000)

setTimeout( () =>{
    body.style.backgroundColor = "green"
}, 6000)
