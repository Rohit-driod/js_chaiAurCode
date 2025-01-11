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

function chai (){
    console.log(this);
    
}
chai()
