


//!CLASS EKLEME

let div=document.getElementById("add")
div.classList.add("fancy","add","addMetod")

//Add
let add = document.getElementById("add")
let button1=document.getElementById("button1")
button1.addEventListener("click",function yazdır(){
    let p=document.createElement("p")
    p.textContent =div.classList.value
    add.prepend(p)
})
button1.addEventListener("click",function(){add.classList.add("add1")})

//Remove
let pRemove=document.getElementById("pRemove")
let button2=document.getElementById("button2")
button2.addEventListener("click",function yazdır2(){
    let p=document.createElement("p")
    p.textContent =div.classList.value
    add.prepend(p)
})
button2.addEventListener("click",function(){pRemove.classList.add("remove1")})
button2.addEventListener("click",function(){add.classList.remove("addMetod")})
button2.addEventListener("click",function(){add.classList.add("remove1")})

//Item
let pItem =document.getElementById("pItem")
let button3=document.getElementById("button3")
button3.addEventListener("click",function(){
    alert(add.classList.item(0))
})



//Contains
let button4=document.getElementById("button4")
let button5=document.getElementById("button5")

button4.addEventListener("click",function(){
    alert(add.classList.contains("fancy"))
})
button5.addEventListener("click",function(){
    alert(add.classList.contains("classList"))
})

//Replace
let pReplace=document.getElementById("pReplace")
let button6=document.getElementById("button6")

add.classList.replace("add","newClass");
button6.addEventListener("click",function(){
    document.getElementById("pReplace").innerHTML=add.classList
})

//Toggle
let pToggle=document.getElementById("pToggle")
let button7=document.getElementById("toggleButton");
button7.addEventListener("click",function(){
pToggle.classList.toggle("colorp");
})

//Length
document.getElementById("length").innerHTML="Class names length:"+" "+div.classList.length