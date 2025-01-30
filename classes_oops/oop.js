const user0 = {
    username : 'rohit',
    logInCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details");
        console.log(`username: ${this.username}`);
        
        
    }


}

// console.log(user.getUserDetails());

function user(username,logInCount,isLoggedIn){
    this.username = username
    this.logInCount = logInCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}

const user1 = new user('rohit',10,true)
const user2 = new user('chai aur code',11,false)

console.log(user1.constructor);

// 'new' keyword creates a new copy of source code every time its used
// 'new' calls  a consructor()
