let main=()=>{
    let val = document.getElementById('val').value
    let option = document.getElementById('option').value
    let result = document.getElementById('result')
    let ic = document.getElementById('ic')

    let re

    let FtoC=(chr)=>{
        let c = ((chr-32)*5/9)
        if(c <= 10){
            result.innerHTML=(` Result = ${c}°celsius `)

        }else if(c >= 40){
            result.innerHTML =(` Result = ${c}°celsius `)

        }else{
            result.innerHTML=(`Result = ${c}°celsius `)
            i
        }
    }

    let CtoF=(fhr)=>{
        let f =((fhr*9/5)+32)
        if(f <= 50){
            result.innerHTML=(` Result = ${f}°fahrenheit `)

        }else if(f >= 104){
            result.innerHTML =(`Result = ${f}°fahrenheit `)

        }else{
            result.innerHTML=(` Result = ${f}°fahrenheit `)

        }
    }

    if(option=="celsius"){
        re = FtoC(val)
        return re
    }else{
        re= CtoF(val)
        return re
    }
}
