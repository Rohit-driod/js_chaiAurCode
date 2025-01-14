const arr =[1,2,3,4,5]

for (const val of arr) {
    // console.log(val)
}

//maps

const map = new Map()
map.set("IN","INDIA")
map.set("USA","UNITED STATES OF AMERICA")
// console.log(map);


for (const [key,value] of map) {
    console.log(key,"-",value);
    
}

const myObject ={
    game1:'NFS',
    game2 : 'spiderman'
}
for (const key of myObject) {
    // console.log(key);
    
    
}