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
// console.log(username);

function CartPrice(val1,val2,...num1){   //rest operator//important
    return num1
}


// console.log(CartPrice(200,40,500,12,85,303));

const user = {
    username : 'rohit',
    price : 45
}
function handleObject(anyObject){
    console.log(`Usernameis ${anyObject['username']} and price is ${anyObject['price']}`);
    

}

handleObject(user)
handleObject({
    username : 'guddu',
    price : 99
})

const myArray = [200,300,600,100]

function returnArray(getArray){
    return getArray[1]
}
// console.log(returnArray(myArray));
// console.log(returnArray([34,67,55,99]));

