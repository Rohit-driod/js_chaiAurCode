//const fbUser = new Object()  singelton object
const fbUser = {} //non-singelton object
fbUser.id = '123abc'
fbUser.name = 'Rohit'
fbUser.isLoggedIn = false
//console.log(fbUser);
const ytUser = {
    email : 'rohit@google.com',
    fullName : {
        userFullName : {
            firstName: 'rohit',
            lastName : 'tirkey'
        }
    }
}

//console.log(ytUser.fullName.userFullName);
const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
const obj3 = {...obj1,...obj2}
//console.log(obj3);


const user =[
    {
        id : '1',
        email : 'r@gmail.com'
    },  
    {
        id : '2',
        email : 'a@gmail.com'
    },
    {
        id : '3',
        email : 'g@gmail.com'
    }
]

// console.log(Object.keys(fbUser))//important

// console.log(fbUser.hasOwnProperty('isLoggedIn'));//to check availablity of keys & values
// console.log(fbUser.hasOwnProperty('isLogged'));//to check availablity of keys & values


const course = {
    courseName : 'js in hindi',
    price : '999',
    courseInstructor : 'Hitesh'
}

const {courseInstructor:instructor} = course//destructure
console.log(instructor);






