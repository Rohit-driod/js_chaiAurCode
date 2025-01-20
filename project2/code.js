const form = document.querySelector("form")
console.log(form);
form.addEventListener("submit",(event) =>{
    event.preventDefault()

    const height =parseInt(document.querySelector("#height").value)
    const weight =parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if(height === '' || height <=0 || isNaN(height)){
        results.innerHTML = "please give a valid height"
    }
    else if(weight === '' || weight <=0 || isNaN(weight)){
        results.innerHTML = "please give a valid weight"
    }
    else{
        const bmi = results.innerHTML = (weight/((height*height)/10000)).toFixed(2)
        if(bmi <= 18.6){
            results.innerHTML = `<p><span>${bmi}</span> you are under weight</p>`
        }else if(bmi > 18.6 && bmi <= 24.9){
            results.innerHTML = `<p><span>${bmi}</span> you are in normal weight</p>`    
        }else{
             results.innerHTML = `<p><span>${bmi}</span> you are over weight</p>`
        }
        
        
    }

})

