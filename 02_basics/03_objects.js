//objects literals

const mySymbol = Symbol('key1')
const jsUser = {
    name : 'Rohit',
    age : 28,
    [mySymbol] : 'myKey',  //declaring symbol in an object
    location : 'sambalpur',
    email : 'rohit@gmail.com',
    isLoggedIn : true,
    loginDays : ['monday','saturday']
}

console.log(jsUser.email);
console.log(jsUser['email']);
console.log(typeof jsUser[mySymbol]);//accessing symbol

jsUser.email = 'rohit@google.com'
//Object.freeze(jsUser)//locks the object
jsUser.email = 'rohit@gpt.com'
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello");
    
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`hello ${this.name}`);
    
}
console.log(jsUser.greetingTwo());








