let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let img5 = document.getElementById("img5")
let img6 = document.getElementById("img6")
let img7 = document.getElementById("img7")
let img8 = document.getElementById("img8")
let img9 = document.getElementById("img9")
let img10 = document.getElementById("img10")
let img11 = document.getElementById("img11")
let img12 = document.getElementById("img12")
let img13 = document.getElementById("img13")
let img14 = document.getElementById("img14")
let img15 = document.getElementById("img15")
let img16 = document.getElementById("img16")

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")
let btn10 = document.getElementById("btn10")
let btn11 = document.getElementById("btn11")
let btn12 = document.getElementById("btn12")
let btn13 = document.getElementById("btn13")
let btn14 = document.getElementById("btn14")
let btn15 = document.getElementById("btn15")
let btn16 = document.getElementById("btn16")
let refrescar = document.getElementById("refrescar")


let array = ["boda2.jpg", "boda.jpg", "boda2.jpg", "boda.jpg", "boda3.jpg", "boda3.jpg", "boda4.jpg", "boda4.jpg", "foto5.jpg", "foto5.jpg", "foto6.jpg", "foto6.jpg", "foto7.jpg", "foto7.jpg", "foto8.jpg", "foto8.jpg"]

let check = ""
let suma = 0





function desordenar(array){
    for(let i = array.length-1; i>0; i--){
        const x = Math.floor(Math.random()*(i+1))

        const temporal = array[i]

        array[i] = array[x]
        array[x] = temporal
    }
    return array
}


desordenar(array)
console.log(array)


function funcion(){

 if(img1.src !== "http://127.0.0.1:5500/img.jpg"){
    img1.style.opacity = 0
    btn1.style.opacity = 0
    btn1.disabled = true
    
 }

 if(img2.src !== "http://127.0.0.1:5500/img.jpg"){
    img2.style.opacity = 0
    btn2.style.opacity = 0
    btn2.disabled = true
 }

  if(img3.src !== "http://127.0.0.1:5500/img.jpg"){
    img3.style.opacity = 0
    btn3.style.opacity = 0
    btn3.disabled = true
    
 }
 if(img4.src !== "http://127.0.0.1:5500/img.jpg"){
    img4.style.opacity = 0
    btn4.style.opacity = 0
    btn4.disabled = true
 }

 if(img5.src !== "http://127.0.0.1:5500/img.jpg"){
    img5.style.opacity = 0
    btn5.style.opacity = 0
    btn5.disabled = true
 }
 if(img6.src !== "http://127.0.0.1:5500/img.jpg"){
    img6.style.opacity = 0
    btn6.style.opacity = 0
    btn6.disabled = true
 }
 if(img7.src !== "http://127.0.0.1:5500/img.jpg"){
    img7.style.opacity = 0
    btn7.style.opacity = 0
    btn7.disabled = true
 }
 if(img8.src !== "http://127.0.0.1:5500/img.jpg"){
    img8.style.opacity = 0
    btn8.style.opacity = 0
    btn8.disabled = true
 }

 if(img9.src !== "http://127.0.0.1:5500/img.jpg"){
    img9.style.opacity = 0
    btn9.style.opacity = 0
    btn9.disabled = true
    
 }

 if(img10.src !== "http://127.0.0.1:5500/img.jpg"){
    img10.style.opacity = 0
    btn10.style.opacity = 0
    btn10.disabled = true
 }

  if(img11.src !== "http://127.0.0.1:5500/img.jpg"){
    img11.style.opacity = 0
    btn11.style.opacity = 0
    btn11.disabled = true
    
 }
 if(img12.src !== "http://127.0.0.1:5500/img.jpg"){
    img12.style.opacity = 0
    btn12.style.opacity = 0
    btn12.disabled = true
 }

 if(img13.src !== "http://127.0.0.1:5500/img.jpg"){
    img13.style.opacity = 0
    btn13.style.opacity = 0
    btn13.disabled = true
 }
 if(img14.src !== "http://127.0.0.1:5500/img.jpg"){
    img14.style.opacity = 0
    btn14.style.opacity = 0
    btn14.disabled = true
 }
 if(img15.src !== "http://127.0.0.1:5500/img.jpg"){
    img15.style.opacity = 0
    btn15.style.opacity = 0
    btn15.disabled = true
 }
 if(img16.src !== "http://127.0.0.1:5500/img.jpg"){
    img16.style.opacity = 0
    btn16.style.opacity = 0
    btn16.disabled = true
 }


}

function funcion2(){
    img1.src ="img.jpg"
    img2.src ="img.jpg"
    img3.src ="img.jpg"
    img4.src ="img.jpg"
    img5.src ="img.jpg"
    img6.src ="img.jpg"
    img7.src ="img.jpg"
    img8.src ="img.jpg"
    img9.src ="img.jpg"
    img10.src ="img.jpg"
    img11.src ="img.jpg"
    img12.src ="img.jpg"
    img13.src ="img.jpg"
    img14.src ="img.jpg"
    img15.src ="img.jpg"
    img16.src ="img.jpg"
 }

function descubrir(){
    img1.src = array[0]

    if(check == array[0]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[0]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

}
    

function descubrir2(){
   
    img2.src = array[1]

    if(check == array[1]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[1]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

}

function descubrir3(){
  
    img3.src = array[2]

    if(check == array[2]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[2]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    
 

    
}

function descubrir4(){
    img4.src = array[3]

    if(check == array[3]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[3]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

    
}

function descubrir5(){
    img5.src = array[4]

    if(check == array[4]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[4]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

    
}


function descubrir6(){
    img6.src = array[5]

    if(check == array[5]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[5]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

    
}


function descubrir7(){
    img7.src = array[6]

    if(check == array[6]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[6]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

    
}


function descubrir8(){
    img8.src = array[7]

    if(check == array[7]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[7]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

    
}

function descubrir9(){
    img9.src = array[8]

    if(check == array[8]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[8]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

}
function descubrir10(){
    img10.src = array[9]

    if(check == array[9]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[9]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

}

function descubrir11(){
    img11.src = array[10]

    if(check == array[10]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[10]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

}
function descubrir12(){
    img12.src = array[11]

    if(check == array[11]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[11]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

}

function descubrir13(){
    img13.src = array[12]

    if(check == array[12]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[12]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

}

function descubrir14(){
    img14.src = array[13]

    if(check == array[13]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[13]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

}

function descubrir15(){
    img15.src = array[14]

    if(check == array[14]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[14]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

}
function descubrir16(){
    img16.src = array[15]

    if(check == array[15]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[15]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

}
function descubrir17(){
    img17.src = array[16]

    if(check == array[16]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[16]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

}
function descubrir18(){
    img18.src = array[17]

    if(check == array[17]){
        console.log("GANASTE!!!")
        suma++
        check = ""
        
       
        setTimeout(funcion,2000)
        

        
    }else if(check == "" && suma == 0){
        check = array[17]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,2000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0
    

}

function refresh(){
    location.reload()
}


