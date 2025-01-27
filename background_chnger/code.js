//generate random color
const randomColor=()=>{
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0 ;i < 6 ;i++){
      color += hex[Math.floor(Math.random()*16)]  
    }
    return color
} 

let intervalId;
const satrtChangingColor = function(){
    if (!intervalId) {
        intervalId = setInterval(changeBgColor,1000)
    }
    function changeBgColor(){
        document.body.style.background = randomColor()
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null  //(impotant)flushes th value and prevents overwriting giving it a cleaner look
}

document.querySelector("#start").addEventListener('click' ,satrtChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)