const sayRohit=()=>{
    console.log("rohit");
    
}
setTimeout(sayRohit,2000)

const changeText = ()=>{
    document.querySelector("h1").innerHTML= "best js series"
}

const changeMe = setTimeout(changeText,2000)

document.querySelector("#stop").addEventListener("click",()=>{
    clearTimeout(changeMe)//stops the setTimeOut()
    console.log("STOPPED");
    
})
