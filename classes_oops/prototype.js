// let myName = 'Rohit   '
// console.log(myName.trueLength);

let myHero = ['thor','spiderman']


let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`spiderman power is ${this.spiderman}`);
        
    } 
}

Object.prototype.hitesh = function(){
    console.log(`hitesh present in all objects`);
    
}

Array.prototype.heyHitesh = function(){
    console.log('hitesh says hello');
    
}


// heroPower.hitesh()

myHero.hitesh()


//inheritance


const user={
    name:'chai',
    email:'rohit@gmail.com'
}
const teacher ={
    makeVideo:true
}
const teachingSupport = {
    isAvailable : false
}
const TASupport ={
    makeAssingment : 'JS assingment',
    fullTime : true,
    __proto__: teachingSupport
}
teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername = "chaiAurCode"
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
    
    
}

anotherUsername.truelength()

'hitesh'.truelength()
'iceTea'.truelength()