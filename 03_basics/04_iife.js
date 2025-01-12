// Immediately Invoked Function Expression (iife)
//To get rid of polution in global scope

(function chai(){//named iffe
    console.log(`DB CONNECTED`);
    
})();//semicolon mandatory

((name)=>{//unnamed iffe
    console.log(`DB CONNECTED ${name}`);
    
})('hitesh');



