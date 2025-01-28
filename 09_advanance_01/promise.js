const promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
    
})//connects to resolve

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('async task 2');
        resolve()
        
    },1000)
}).then(()=>{
    console.log('async 2 resolved');
    
})  

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username: 'rohit',email: "rohit@gmail.com"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
    
})

const promiseFour= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true

        if(!error){
            resolve({username: 'Rohit',pass: 123})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

 promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((myUser)=>{
    console.log(myUser);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log('The Promise is either solved or rejected');
    
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true

        if(!error){
            resolve({username: 'Java script',pass: 123})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log('EE',error);
        
//     }
    

// }



// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})