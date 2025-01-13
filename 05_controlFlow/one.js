
const isUserLggedIn =true

const temprature = 41

// if(temprature<=40){
//     console.log('less than 50');
    
// }else{
//     console.log('temprature is greater than 50');
    
// }

// const score =200
// if(score > 100){
//     const power = 'fly'
//     console.log(`User power : ${power}`)
// }

// const balance = 1000
// if(balance > 500)console.log('test');

// if(balance < 500){
//     console.log('less than 500')
// }else if(balance<750){
//     console.log('less than 750');
// }else if(balance<900){
//     console.log('less than 900');
// }

// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(isUserLggedIn && debitCard && 2===3){
//     console.log('allow to buy course');    
// }

// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log('userLogged in');
    
// }

//Nullish Coalescing Operator(??) : null ,undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

//terniary operator

const iceTeaPrice =100
iceTeaPrice >= 80 ? console.log('less than 80 ') : console.log('greater than 80');








