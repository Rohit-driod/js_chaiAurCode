const coding = ['js','ruby','python','java']

// coding.forEach( function (val){
//     console.log(val);
    
// })


// coding.forEach(val => {
//     console.log(val);
    
// });

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

coding.forEach( (item , index ,arr)=>{
    // console.log(item , index ,arr);
    
})

const myCoding = [
    {
        name : "javascript",
        fileName : "js"
    },
    {
        name : "python",
        fileName : "py"
    },
    {
        name : "C++",
        fileName : "cpp"
    }
]

myCoding.forEach(val =>{
    console.log(val.fileName);
    
})