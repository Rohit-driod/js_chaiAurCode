function addTwoNumbers(num1,num2){
     //console.log(num1+num2);
     return num1+num2
     console.log('rohit')//wont execute coz of return
     
}
addTwoNumbers(3,4)
const result = addTwoNumbers(5,6)
//console.log('result is:',result);

function logInUserMessage(username = 'guddu'){//default value
    if(!username){
        console.log('Enter a username');
        
    }
    return `${username} just logged in`
}
const username = logInUserMessage('Rohit')
console.log(username);

