for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    
}

for (let  i= 1;  i<= 10; i++) {
    // console.log(`outer loop ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop ${j} , ${i}`);
        // console.log(i+ "*" +j + "=" + i*j);
        
        
    }
    
}

let myArray = ["flash", "batman","superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}


//break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue //skip condition without breaking the loop
    }
    console.log(`values of i is ${index}`);
    
    
}