const user = {
    userName : 'Rohit',
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.userName},welcome to the website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
//  user.userName = 'guddu'
//  user.welcomeMessage()
// console.log(this);

// function chai (){
//     let userName = 'guddu'
//     console.log(this.userName);//'this' does not work in a function
    
// }
// chai()

// const chai=()=>{
//     let userName = 'guddu'
//     console.log(this.userName);
    
// }
// chai()


// const addTwo = (num1,num2)=>{
//     return num1+num2
// }


const addTwo = (num1,num2)=> num1+num2 //no need to 'return' if curly braces r not used 

console.log(addTwo(1,2));

const add = () =>({userName :'rohit' })//use () to return object
console.log(add());




