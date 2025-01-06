const marvelHeros = ['thor','iornman','spiderman']
const dcHeros = ['superman','flash','batman']

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

const newHeros = [...marvelHeros,...dcHeros]//spread operator
console.log(newHeros);

const array1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

let realArray = array1.flat(Infinity)
console.log(realArray);



console.log(Array.isArray('Rohit'))
console.log(Array.from('Rohit'))
console.log(Array.from({name : 'Rohit'}))//important


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



