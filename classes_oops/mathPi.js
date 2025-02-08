const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(Math.PI);
console.log(descriptor);

const chai = {
    name: 'ginger',
    price: 222,
    isAvailable: true,

    oderChai:function(){
        console.log('not executed');
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
Object.defineProperty(chai ,"name",{
    enumerable:false
})
    


for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
   
    
    
}