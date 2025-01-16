const myNums = [1,2,3]
 
// const myTotal = myNums.reduce(function (acc,currVal ){
//     console.log(`acc ${acc} currVal${currVal}`);
    
//     return acc + currVal
// },0)


const myTotal= myNums.reduce((acc,currVal)=>acc+currVal,0)
console.log(myTotal);


const shoppingCart = [
    {
        iteamName : 'js-course',
        price : 999,
    },
    {
        iteamName : 'py-course',
        price : 2999,
    },
    {
        iteamName : 'mobileDev-course',
        price : 4999,
    },
    {
        iteamName : 'dataScientist-course',
        price : 9999,
    }
]

const totalPrice = shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(totalPrice);
