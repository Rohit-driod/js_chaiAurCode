class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course was addded by ${this.username}`)
    }
        
}

const chai = new teacher('chai','chai@gmail.com',123)
chai.addCourse()

const masalaChai= new User('masalaChai')
// masalaChai.addCourse()
masalaChai.logMe()

console.log(chai instanceof teacher);

