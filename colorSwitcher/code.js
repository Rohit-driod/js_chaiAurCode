const buttons =  document.querySelectorAll(".button")
console.log(buttons)
const body = document.querySelector("body")
document.querySelector("h1").style.color = "blue"
buttons.forEach((btn) =>{
    btn.addEventListener("click",(event) =>{
        console.log(event);
        console.log(event.target);// (important) checks the event target
        if(event.target.id === "grey"){
            body.style.backgroundColor = "grey"
        }
        else if(event.target.id === "blue"){
            body.style.backgroundColor = "blue"
        }
        else if(event.target.id === "yellow"){
            body.style.backgroundColor = "yellow"
        }
        else if(event.target.id === "white"){
            body.style.backgroundColor = "#fff"
        }
    })

})

