const myArr = [0,1,2,3,4,5,true,'rohit']
console.log(myArr[0]);


//methods

// myArr.push(6,7)
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()

// console.log(myArr.indexOf(5));

// const newArr = myArr.join()
// console.log(myArr);


// console.log(newArr); 
// console.log(typeof newArr); 

console.log('A',myArr);
const myNewArr1 = myArr.slice(1,3)//does not manipulates source 
console.log(myNewArr1);
console.log('B',myArr);

const myNewArr2 = myArr.splice(1,3)//manipulates source
console.log('C',myArr);
console.log(myNewArr2);




