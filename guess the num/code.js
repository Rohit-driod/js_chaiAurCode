let rand = parseInt(Math.random()*100+1)
console.log(rand);

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const satrtOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1


let playGame = true

if (playGame) {
    submit.addEventListener("click",function(event){
        event.preventDefault()
        const guess = parseInt(userInput.value);
        
        validateGuess(guess)
    })
}


const validateGuess = (guess)=>{
    if(isNaN(guess)){
        alert("please enter a valid number")
    }else if(guess <=0){
        alert("please enter a valid number")
    }else if(guess >100){
        alert("please enter a valid number")
    }else{
        prevGuess.push
        if(numGuess > 10){
            displayGuess(guess)
            displayMessage(`game over Random number was ${rand}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

const checkGuess = ((guess)=>{
    if(guess === rand){
        displayMessage(`You guessed it right`)
        endGame()

    }else if(guess < rand){
        displayMessage(`number is low`)
    }else if(guess > rand){
        displayMessage(`number is high`)
    }
})

const displayMessage = ((message) =>{
    lowOrHi.innerHTML = `<h2>${message}</h2>`
})

const displayGuess = (guess)=>{
    userInput.value = ""
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}
const endGame = (()=>{
    userInput.value = ""
    userInput.setAttribute("disabled","")
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start a new game</h2>`
    satrtOver.appendChild(p)
    playGame = false
    newGame()
})

const newGame = (()=>{
    const newButton = document.querySelector("#newGame")
    newButton.addEventListener("click",function(event){
     rand = parseInt(Math.random()*100+1)
     console.log(rand);
     
     prevGuess = []
     numGuess = 1
     guessSlot.innerHTML =" "
     remaining.innerHTML = `${11-numGuess}`
     userInput.removeAttribute("disabled")
     satrtOver.removeChild(p)
     playGame =true
    })

})


 