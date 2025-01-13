const userEmail = []

if (userEmail) {
    console.log('got user email');
    
}else{
    console.log("don't have user email");
    
}

//falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy value
// "0" ,"false"," ",[],{},function(){}

// if (userEmail.length === 0) {
//     console.log('Arrray is empty');
    
// }

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");
    
}