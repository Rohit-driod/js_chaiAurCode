
requestUrl='https://api.qithub.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest()
xhr.open( 'GET',requestUrl)
console.log(xhr.readyState);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    
}

xhr.send();

