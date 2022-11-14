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

let conteo = document.getElementById("conteo")
let rec = document.getElementById("rec")

let clicks = 0
let record = 100
let aciertos = 0

let botones = [btn1, btn2, btn3, btn4,btn5, btn6, btn7, btn8,btn9, btn10, btn11, btn12,btn13, btn14, btn15, btn16]
let imagenes = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16]


let array = ["boda2.jpg", "boda.jpg", "boda2.jpg", "boda.jpg", "boda3.jpg", "boda3.jpg", "boda4.jpg", "boda4.jpg", "foto5.jpg", "foto5.jpg", "foto6.jpg", "foto6.jpg", "foto7.jpg", "foto7.jpg", "foto8.jpg", "foto8.jpg"]

let check = ""
let suma = 0

let audioWin = document.getElementById("audioWin")
let seleccion = document.getElementById("seleccion")
let champions = document.getElementById("champions")

localStorage.setItem("record", "200") 
let getRecord = JSON.parse(localStorage.getItem("record"))
rec.textContent = "RECORD: "


function traerRecord(){
    
    
    rec.textContent = "RECORD: " +  getRecord
    record = parseInt(getRecord)
    

}

traerRecord()




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



function funcion(){

    for(let i = 0; i < botones.length; i++){
        if(imagenes[i].src !== "https://legendary-sunflower-53f630.netlify.app/img.jpg"){
            imagenes[i].style.opacity = 0
            botones[i].style.opacity = 0
            botones[i].disabled = true
         }
         console.log(imagenes[i])

    
    }
    
    


}

function funcion2(){

for(let i = 0; i < imagenes.length; i++){
imagenes[i].src = "img.jpg"

}

    
 }

function descubrir(){
   

    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img1.src = array[0]

    if(check == array[0]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,500)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[0]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,500)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

    
    partidaTerminada()

    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
   
    btn1.setAttribute("disabled", "disabled")


}
    

function descubrir2(){
    
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img2.src = array[1]

    if(check == array[1]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,500)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[1]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,500)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

    
    partidaTerminada()

    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn2.setAttribute("disabled", "disabled")



}

function descubrir3(){
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img3.src = array[2]

    if(check == array[2]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,1000)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[2]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,1000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

    
    partidaTerminada()
    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn3.setAttribute("disabled", "disabled")

   
    
   

    
}

function descubrir4(){
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img4.src = array[3]

    if(check == array[3]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,1000)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[3]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,1000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

    
    partidaTerminada()
    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn4.setAttribute("disabled", "disabled")

   
   

    
}

function descubrir5(){
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img5.src = array[4]

    if(check == array[4]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,1000)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[4]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,1000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

   
    partidaTerminada()
    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn5.setAttribute("disabled", "disabled")

    
  

    
}


function descubrir6(){
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img6.src = array[5]

    if(check == array[5]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,1000)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[5]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,1000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

    
    partidaTerminada()
    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn6.setAttribute("disabled", "disabled")

   
  
    
}


function descubrir7(){
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img7.src = array[6]

    if(check == array[6]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,1000)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[6]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,1000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

    
    partidaTerminada()
    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn7.setAttribute("disabled", "disabled")

   
    
   
    
}


function descubrir8(){
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img8.src = array[7]

    if(check == array[7]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,1000)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[7]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,1000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

   
    partidaTerminada()
    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn8.setAttribute("disabled", "disabled")

   

    
}

function descubrir9(){
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img9.src = array[8]

    if(check == array[8]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,1000)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[8]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,1000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

   
    partidaTerminada()
    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn9.setAttribute("disabled", "disabled")

   

}
function descubrir10(){
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img10.src = array[9]

    if(check == array[9]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,1000)
        console.log(img1.src)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[9]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,1000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

    
    partidaTerminada()
    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn10.setAttribute("disabled", "disabled")

   
    

}

function descubrir11(){
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img11.src = array[10]

    if(check == array[10]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,1000)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[10]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,1000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

   
    partidaTerminada()
    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn11.setAttribute("disabled", "disabled")

  

}
function descubrir12(){
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img12.src = array[11]

    if(check == array[11]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,1000)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[11]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,1000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

   
    partidaTerminada()
    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn12.setAttribute("disabled", "disabled")

    
   

}

function descubrir13(){
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img13.src = array[12]

    if(check == array[12]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,1000)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[12]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,1000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

   
    partidaTerminada()
    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn13.setAttribute("disabled", "disabled")

  
}

function descubrir14(){
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img14.src = array[13]

    if(check == array[13]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,1000)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[13]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,1000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

    
    partidaTerminada()
    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn14.setAttribute("disabled", "disabled")

   

}

function descubrir15(){
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img15.src = array[14]

    if(check == array[14]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,1000)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[14]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,1000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

   
    partidaTerminada()
    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn15.setAttribute("disabled", "disabled")

   
}
function descubrir16(){
    clicks++
    conteo.textContent = `CONTEO: ${clicks}`
    seleccion.play()
    img16.src = array[15]

    if(check == array[15]){
        console.log("GANASTE!!!")
        aciertos++
        suma++
        check = ""
        
       
        setTimeout(funcion,1000)
        audioWin.play()
        

        
    }else if(check == "" && suma == 0){
        check = array[15]
        suma = 1
       
    }else{
        console.log("Perdiste...")
        suma = 0
        setTimeout(funcion2,1000)
        
        check = ""
        
    }
    console.log(check)
    console.log(suma)
    suma = 0

    
    partidaTerminada()
    for(let i = 0; i < botones.length; i++){
        botones[i].removeAttribute("disabled")
    }
    btn16.setAttribute("disabled", "disabled")

   

}


function refresh(){
    location.reload()
    champions.stop()
}



function partidaTerminada(){

    if(aciertos == 8){
        champions.play()
        conteo.textContent = "Partina finalizada con " + clicks + " clicks!"
        if (clicks < record){
            localStorage.setItem("record", JSON.stringify(clicks))  
            rec.textContent = "RECORD: " + clicks

        }
    }
    

}




