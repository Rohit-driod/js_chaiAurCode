function multiply (num){
    return num * 5
}
multiply.power = 2
console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);

function createUser(username,score){
    this.username = username
    this.score =score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
    
}

const chai = new createUser('chai',25)
const tea = new createUser('tea',222)

chai.printme()


