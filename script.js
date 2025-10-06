const slider=document.querySelectorAll("slider")
const btnprev=document.getElementById("prev-button")
const btnnext=document.getElementByIde("nex-button")
let currentslide=0

function ocultar(){
    slider.forEach(item =>item.classList.remove("on"))
}
function mostrar(){
    slider=[currentslide].classList.add("on")
}