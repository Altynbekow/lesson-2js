// log3();
// console.log(1);
//
// function log3(){
//     console.log(3);
// }
// console.log(2);
//
// console.log("hi");
//
// setTimeout(function timeout(){
//     console.log("click the button");
// }, 5000)
//
// console.log("welcome to loupe")




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
// // param2 = timer
// const body = document.body
// body.style.backgroundColor = "red"


const redDiv = document.querySelector(".red")
const yellowDiv = document.querySelector(".yellow")
const greenDiv = document.querySelector(".green")

redDiv.style.backgroundColor = "red"
// yellowDiv.style.backgroundColor = "yellow"
// greenDiv.style.backgroundColor = "green"
// setTimeout(() => {
//     redDiv.style.backgroundColor = "red"
// },3000)
// setTimeout(() => {
//     redDiv.style.backgroundColor = "black"
//     yellowDiv.style.backgroundColor = "yellow"
// },3000)
//
// setTimeout( () =>{
//     yellowDiv.style.backgroundColor = "black"
//     greenDiv.style.backgroundColor = "green"
// },6000)

let seconds = 0;
setInterval(
    () => {
        redDiv.innerHTML = `<h4>${seconds}</h4>`
        yellowDiv.innerHTML = `<h4>${seconds}</h4>`
        greenDiv.innerHTML = `<h4>${seconds}</h4>`
        ++seconds
        if (seconds === 3){
            redDiv.style.background = "black"
            yellowDiv.style.background = "yellow"
        } else if(seconds === 6){
        yellowDiv.style.background = "black"
        greenDiv.style.background = "green"
        }else if(seconds === 9){
            seconds = 0;
            greenDiv.style.background = "black"
            redDiv.style.background = "red"
        }
    }, 1000
)

