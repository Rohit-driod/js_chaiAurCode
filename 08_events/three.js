const start = document.querySelector('#start')
const end = document.querySelector('#stop')
let timePrime
const time = () =>{
    timePrime = setInterval(()=>{
        console.log("rohit");
        
    },1000)
}

start.addEventListener('click',()=>{
    time()
})

end.addEventListener('click',()=>{
    
    clearInterval(timePrime)
})


