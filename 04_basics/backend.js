/*Javascript Execution Context

{} --> Global Execution Context
   --> Function Execution Context
   --> Eval Execution Context 


// how code executes

--> memory creation phase/creation phase
--> Execution phase
 
*/



let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10,2)


//global execution ---> this

//memory phase
//val1 = undefined
//val2 = undefined
//addNum = function defination
//result1 = undefined
//result2 = undefined


//execution phase
//val1 = 10
//val = 5
//addNum = new variable environment + execution thread
            //memory phase
            //val1 = undefined
            //val2 = undefined
            //total = undefined


            //execution phase
            //num1 = 10 
            //num2 = 5
            //total = 15 // 'return' executes to global execution
//result1 = 15

//'new variable environment + execution thread' gets deleted 

//now the same process will repeat for the next function/funtion calling

//Call stack //important watch video
//global execution