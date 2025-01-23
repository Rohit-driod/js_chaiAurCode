// document.getElementById('owl').onclick = () =>{
//     alert("owl")
// }
//type,timstamp,default
//target,toElement,srcElement,currTarget
//clientX,clientY,screenX,screenY
//altkey,ctrlkey,shiftkey,keycode


// document.getElementById('images').addEventListener('click',(event)=>{
//     console.log('clicked');
    
// },false)//default is always 'fasle' no need to mention it

// //event propogation
// document.getElementById('owl').addEventListener('click',(event)=>{
//     console.log('owl clicked');
//     event.stopPropagation() //does not go to the top
// },true)

// //bubbling -- > using 'false/default' event goes from bottom to top
// //capturing -- > using 'true' event goes from top to bottom

// document.getElementById('google').addEventListener('click',(e)=>{
//     e.preventDefault()
//     e.stopPropagation()
//     console.log('clicked google');
   
// },false)


document.querySelector('#images').addEventListener('click',(e)=>{
    console.log(e.target.parentNode);
    if(e.target.tagName === "IMG"){
        console.log(e.target.id);
        
        let removeIt =e.target.parentNode
    removeIt.remove()
    }
    
    // removeIt.parentNode.removeChild(removeIt)
    
},false)

