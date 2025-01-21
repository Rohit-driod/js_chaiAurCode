const clock = document.querySelector("#clock")


setInterval(() =>{//to set after how much times code updates(important)
    let date = new Date()
// console.log(date.toLocaleTimeString());//it returns real time value
    clock.innerHTML = date.toLocaleTimeString()
},1000)