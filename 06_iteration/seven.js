const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNmber = myNumber.map( (num)=>num+10)
// // console.log(newNmber);
// const n1 =[]
// myNumber.forEach((num)=>{
//      n=  num + 10
//      n1.push(n)
// })


const newNums = myNumber
        .map((num)=> num *10 )
        .map((num)=> num + 1)
        .filter((num)=> num>=40)


console.log(newNums);



