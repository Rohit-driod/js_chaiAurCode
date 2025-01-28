 
const button = document.querySelector('button')

button.addEventListener('click',()=>{
    console.log(xhr.readyState);
    xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        console.log( data);
        
        console.log(data.avatar_url);
        document.querySelector('.idCard').style.backgroundImage = `url(${data.avatar_url})`
        
    }
    
}

xhr.send();
})


requestUrl='https://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest()
xhr.open( 'GET',requestUrl)
console.log(xhr.readyState);
// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         const data = JSON.parse(this.responseText)
//         console.log( data);
        
//         console.log(data.avatar_url);
        
//     }
    
// }

// xhr.send();


